import {
  ReactFlow,
  Controls,
  applyNodeChanges,
  useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useMemo, useEffect, useState, useCallback, useRef } from "react";
import isPrecluded from "@/graph/isPreclusion";
import {
  computeNodePositions,
  extractMods,
  getDirectDependents,
  getModuleNeighborhood,
} from "./layoutUtils";
import Sidebar from "@/components/sideBar";
import ModuleNode from "@/components/ModuleNode";
import buildTree from "@/graph/buildTree";
import findEdgeType from "@/graph/findEdgeType";
import MissingMods from "./missingmods";
import "@/app/globals.css";
import { getPlannerModuleId } from "@/graph/plannerModuleIds";
import { useFocusMode } from "./focus";
import FocusView from "./focusView";
import {
  getUserAddModules,
  upsertUserAddModule,
} from "../server/planner.service";
import { authClient } from "@/lib/auth-client";
import {
  DEFAULT_TERM,
  classifyPlannerModulesByTerm,
  getTermIndex,
} from "@/graph/termUtils";
import {
  getModuleNodeBackground,
  getModuleNodeBorder,
  SELECTED_MODULE_BORDER_COLOR,
} from "@/graph/moduleStatus";

const OR_COLORS = ["#a855f7", "#ec4899", "#06b6d4", "#f97316", "#10b981"];
const EDGE_COLORS = {
  and: "#3b82f6",
  or: "#8b5cf6",
};

// Static registration of custom node components outside the component block
const nodeTypes = {
  moduleNodeType: ModuleNode,
};

const createDirectDependencyEdge = (source, target, edgeType) => {
  const color = edgeType === "or" ? EDGE_COLORS.or : EDGE_COLORS.and;

  return {
    id: `${source}-${target}`,
    source,
    target,
    label: edgeType === "or" ? "OR" : "AND",
    style: {
      stroke: color,
      strokeWidth: 2,
    },
    labelStyle: {
      fontSize: "10px",
      fill: color,
    },
  };
};

export default function Simple({
  mods,
  completedMods,
  compulsoryMods,
  takenMods,
  allMods,
  isSideBarOpen,
  setIsSideBarOpen,
  prereqMap,
  selectedTerm = DEFAULT_TERM,
}) {
  const { fitView, setCenter, getNode, getZoom } = useReactFlow();
  const [baseNodes, setBaseNodes] = useState([]); // raw nodes from async work
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedView, setSelectedView] = useState("focus");
  const [showEligible, setShowEligible] = useState(false);
  const [localCompletedModIds, setLocalCompletedModIds] = useState([]);
  const [positions, setPositions] = useState({});
  const [customPositions, setCustomPositions] = useState({});
  const [measuredGhostState, setMeasuredGhostState] = useState({
    selectedNode: null,
    ids: new Set(),
  });
  const [eligibleMods, setEligibleMods] = useState([]);
  const [plannerMods, setPlannerMods] = useState([]);

  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (session?.user?.id) {
      const userId = session.user.id;
      getUserAddModules(userId).then(setPlannerMods);
    }
  }, [session]);


  const handleNewAddModule = useCallback(
    async (moduleId) => {
      if (session?.user?.id) {
        const userId = session.user.id;
        const savedModule = await upsertUserAddModule({
          userId: userId,
          moduleId: moduleId,
          planYear: 1,
          planSemester: 1,
        });

        setPlannerMods((prev) => {
          const existingIndex = prev.findIndex(
            (mod) => mod.moduleId === savedModule.moduleId,
          );

          if (existingIndex === -1) {
            return [...prev, savedModule];
          }

          const next = [...prev];
          next[existingIndex] = savedModule;
          return next;
        });
      }
    },
    [session],
  );

  const modMap = useMemo(() => new Map(mods.map((m) => [m.id, m])), [mods]);
  const modIds = useMemo(() => new Set(mods.map((m) => m.id)), [mods]);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const data = JSON.parse(
        event.dataTransfer.getData("application/reactflow"),
      );

      // check if the dropped element is valid
      if (!data.id) {
        return;
      }

      const mod = modMap.get(data.id);
      console.log("mod", mod);
      //setPlannerMods((nds) => nds.concat(mod));
      void handleNewAddModule(data.id);
      // details: https://reactflow.dev/whats-new/2023-11-10
      // const position = {
      //   x: 0,
      //   y: 0,
      // };
      // const newNode = {
      //   id: data.id,
      //   type: "moduleNodeType",
      //   position,
      //   data: { label: data.id },
      // };

      // setBaseNodes((nds) => nds.concat(newNode));
    },
    [modMap, handleNewAddModule],
  );

  const highlightNode = useCallback((nodeId) => {
    const nodeElement = document.querySelector(`[data-id="${nodeId}"]`);

    if (nodeElement) {
      nodeElement.classList.add("node-flash-highlight");

      // 3. Remove it after 2 seconds
      setTimeout(() => {
        nodeElement.classList.remove("node-flash-highlight");
      }, 2000);
    }
  }, []);

  const centerNode = useCallback(
    (moduleId) => {
      const node = getNode(moduleId);
      const x = getZoom();
      if (!node) {
        return;
      }
      setCenter(node.position.x, node.position.y, { zoom: x });
      highlightNode(moduleId);
    },
    [getNode, setCenter, getZoom, highlightNode],
  );

  const plannerStatus = useMemo(
    () =>
      classifyPlannerModulesByTerm({
        plannedModules: completedMods || [],
        selectedTerm,
        modMap,
      }),
    [completedMods, selectedTerm, modMap],
  );

  const completedIds = useMemo(
    () => [
      ...new Set([
        ...plannerStatus.completedIds,
        ...localCompletedModIds,
      ]),
    ],
    [plannerStatus.completedIds, localCompletedModIds],
  );

  const warningIds = useMemo(
    () =>
      [...plannerStatus.warningIds].filter(
        (moduleId) => !localCompletedModIds.includes(moduleId),
      ),
    [plannerStatus.warningIds, localCompletedModIds],
  );

  const measureGhostIds = useMemo(
    () =>
      measuredGhostState.selectedNode === selectedNode
        ? measuredGhostState.ids
        : new Set(),
    [measuredGhostState, selectedNode],
  );

  const handleModuleCompleted = useCallback((moduleId) => {
    setLocalCompletedModIds((prev) =>
      prev.includes(moduleId) ? prev : [...prev, moduleId],
    );
  }, []);

  const {
    deepPrereqs,
    focusIds,
    focusPositions,
  } = useFocusMode({
    selectedNode,
    selectedView,
    prereqMap,
    completedIds,
    mods,
    modMap,
  });

  const activePositions = useMemo(() => {
    const base = selectedNode && selectedView === "focus" ? focusPositions : positions;
    return {
      ...base,
      ...customPositions,
    };
  }, [selectedNode, selectedView, focusPositions, positions, customPositions]);

  const ghostNodes = useMemo(() => {
    if (!selectedNode) return [];

    const selectedBaseNode = baseNodes.find((n) => n.id === selectedNode);
    const selectedPos = activePositions[selectedNode] ??
      selectedBaseNode?.position ?? { x: 0, y: 0 };

    const baseX = Number.isFinite(selectedPos.x) ? selectedPos.x : 0;
    const baseY = Number.isFinite(selectedPos.y) ? selectedPos.y : 0;

    if (selectedView === "focus") {
      const inGraph = new Set(baseNodes.map((m) => m.id));
      const ghostNodeIds = [...deepPrereqs].filter((id) => !inGraph.has(id));

      return ghostNodeIds.map((prereq, index) => {
        const modObj = modMap.get(prereq);
        const layoutPosition = activePositions[prereq];
        return {
          id: prereq,
          type: "moduleNodeType",
          position: layoutPosition ?? { x: baseX + index * 160, y: baseY - 120 },
          data: {
            label: prereq,
            title: modObj?.title || "Unknown Title",
            description: modObj?.description || "",
            isGhost: true,
            state: 1,
          },
          style: {
            color: "#000000",
            backgroundColor: "#fef08a",
            borderRadius: "8px",
            fontSize: "11px",
            border: "2px dashed #ca8a04",
            opacity: 0.85,
            cursor: "pointer",
          },
        };
      });
    } else {
      const inGraphNodes = new Set(baseNodes.map((m) => m.id));
      const ghostNodesList = [];
      const selectedMissingPrereqs = MissingMods(prereqMap.get(selectedNode), completedIds) ?? [];

      selectedMissingPrereqs.forEach((prereq, index) => {
        if (Array.isArray(prereq)) {
          const junctionId = `junction-or-${selectedNode}-${prereq.join("-")}`;
          const orColor = OR_COLORS[index % OR_COLORS.length];
          ghostNodesList.push({
            id: junctionId,
            type: "default",
            position: { x: baseX - 120 + index * 80, y: baseY - 60 },
            data: { label: "OR" },
            style: {
              width: 35,
              height: 35,
              borderRadius: "50%",
              backgroundColor: orColor,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "10px",
              fontWeight: "bold",
              border: "none",
              opacity: 0.85,
            },
          });

          prereq.forEach((subPrereq, subIndex) => {
            if (inGraphNodes.has(subPrereq)) return;
            const modObj = modMap.get(subPrereq);
            if (!modObj) return;
            const layoutPosition = activePositions[subPrereq];

            ghostNodesList.push({
              id: subPrereq,
              type: "moduleNodeType",
              position: layoutPosition ?? {
                x: baseX - 160 + subIndex * 160,
                y: baseY - 120,
              },
              data: {
                label: subPrereq,
                title: modObj.title,
                description: modObj.description,
                isGhost: true,
                state: 3,
              },
              style: {
                color: "#000000",
                backgroundColor: "#fef08a",
                borderRadius: "8px",
                fontSize: "11px",
                border: "2px dashed #ca8a04",
                opacity: 0.85,
                cursor: "pointer",
              },
            });
          });
        } else {
          if (inGraphNodes.has(prereq)) return;
          const modObj = modMap.get(prereq);
          if (!modObj) return;
          const layoutPosition = activePositions[prereq];

          ghostNodesList.push({
            id: prereq,
            type: "moduleNodeType",
            position: layoutPosition ?? { x: baseX + index * 160, y: baseY - 120 },
            data: {
              label: prereq,
              title: modObj.title,
              description: modObj.description,
              isGhost: true,
              state: 3,
            },
            style: {
              color: "#000000",
              backgroundColor: "#fef08a",
              borderRadius: "8px",
              fontSize: "11px",
              border: "2px dashed #ca8a04",
              opacity: 0.85,
              cursor: "pointer",
            },
          });
        }
      });

      return ghostNodesList;
    }
  }, [
    selectedNode,
    selectedView,
    baseNodes,
    deepPrereqs,
    completedIds,
    prereqMap,
    modMap,
    activePositions,
  ]);

  // ONLY re-runs when actual data changes, not on selection
  useEffect(() => {
    async function calculateNodes() {
      const completedIdPayload = completedIds.map((id) => ({
        code: 2,
        id,
      }));
      const compulsoryIds = (compulsoryMods || []).map((m) => ({
        code: 0,
        id: m,
      }));
      const takenIds = (takenMods || []).map((m) => ({ code: 1, id: m.id }));
      const takenIdSet = new Set(takenIds.map((m) => m.id));
      const plannerTakenIds = [...plannerStatus.takenIds].map((id) => ({
        code: 1,
        id,
      }));
      const warningIdPayload = warningIds.map((id) => ({ code: 3, id }));
      const plannedIds = (plannerMods || []).map((m) => ({
        code: 1,
        id: m.moduleId,
      }));

      let final = await isPrecluded({
        completedIds: completedIdPayload,
        takenIds,
        compulsoryIds,
      });
      final = final
        .concat(plannerTakenIds)
        .concat(plannedIds)
        .concat(warningIdPayload);
      final.sort((a, b) => b.code - a.code);

      const uniques = new Map();
      for (const node of final) {
        if (!uniques.has(node.id)) uniques.set(node.id, node);
      }
      const finalNodes = [...uniques.values()];

      const compulsoryIdSet = new Set(compulsoryMods || []);

      const availableNodes = showEligible
        ? finalNodes
        : finalNodes.filter(
            (n) =>
              !(takenIdSet.has(n.id) && n.code === 1) ||
              compulsoryIdSet.has(n.id),
          );

      const eligibles = finalNodes
        .filter((n) => takenIdSet.has(n.id) && n.code === 1)
        .map((obj) => obj.id);
      setEligibleMods(eligibles);

      const nodeForPositions = availableNodes
        .map((n) => modMap.get(n.id))
        .filter(Boolean);

      const computedPositions = computeNodePositions(nodeForPositions);
      setPositions(computedPositions);
      setCustomPositions({});

      const flowNodes = availableNodes.map((mod) => {
        const modObj = modMap.get(mod.id); // O(1) instead of filter()
        const isCompulsory = compulsoryIds
          .map((obj) => obj.id)
          .includes(mod.id);

        return {
          id: mod.id,
          type: "moduleNodeType",
          position: {
            x: computedPositions[mod.id]?.x ?? 0,
            y: computedPositions[mod.id]?.y ?? 0,
          },
          data: {
            label: mod.id,
            title: modObj?.title,
            description: modObj?.description,
            onCompleted: (moduleId) => handleModuleCompleted(moduleId),
            code: mod.code, // store code so useMemo can use it for styling
            showAsterisk: isCompulsory,
            state: mod.code,
            term: selectedTerm,
          },
        };
      });

      setBaseNodes(flowNodes);
    }
    calculateNodes();
  }, [
    completedIds,
    compulsoryMods,
    takenMods,
    plannerStatus.takenIds,
    warningIds,
    showEligible,
    modMap,
    handleModuleCompleted,
    plannerMods,
    setCustomPositions,
  ]);

  const inGraph = useMemo(
    () => new Set(baseNodes.map((mod) => mod.id)),
    [baseNodes],
  );

  console.log("inGraph", inGraph);
  // Selection styling is pure derivation — no async, no rebuild
  const { nodes, edges } = useMemo(() => {
    // Determine if we are in focus mode
    const isFocus = selectedNode && selectedView === "focus";
    // filter baseNodes depending on whether we are in focus mode or not
    const visibleBaseNodes = isFocus
      ? baseNodes.filter((node) => focusIds.has(node.id))
      : baseNodes;

    const oneDepthNodes =
      selectedNode === null
        ? new Set()
        : new Set([
            ...extractMods(modMap.get(selectedNode)?.prereqTree).filter((n) =>
              inGraph.has(n),
            ),
            ...getDirectDependents(selectedNode, mods).filter((n) =>
              inGraph.has(n),
            ),
          ]);
    const styled = visibleBaseNodes.map((node) => {
      const isSelected = node.id === selectedNode;
      const isRelated = selectedNode && focusIds.has(node.id);
      const isOneDepth = oneDepthNodes.has(node.id);
      const brightness = !selectedNode
        ? 1
        : isFocus
          ? isRelated
            ? 1
            : 0.35
          : isOneDepth || isSelected
            ? 1
            : 0.35;
      return {
        ...node,
        position: activePositions[node.id] ?? node.position,
        style: {
          color: "#000000",
          backgroundColor: getModuleNodeBackground(node.data.code),
          borderRadius: "8px",
          fontSize: "11px",
          border: isSelected
            ? `2px solid ${SELECTED_MODULE_BORDER_COLOR}`
            : getModuleNodeBorder(node.data.code),
          opacity: brightness,
          cursor: "pointer",
        },
      };
    });

    if (!selectedNode) {
      return { nodes: [...styled, ...ghostNodes], edges: [] };
    }

    const completedIdSet = new Set(completedIds);
    const resultEdges = [];
    const edgeSet = new Set();
    const junctionNodes = [];

    if (selectedView === "focus") {
      const renderablePrereqSet = new Set([
        ...completedIds,
        ...ghostNodes.map((n) => n.id),
        ...baseNodes.map((n) => n.id),
      ]);

      mods.forEach((mod) => {
        if (!mod.prereqTree) return;
        const prereqs = [...new Set(extractMods(mod.prereqTree))];
        const isSelected = mod.id === selectedNode;
        const isPrereqOfSelected = prereqs.includes(selectedNode);
        if (!isSelected && !isPrereqOfSelected) return;

        if (isSelected) {
          buildTree(
            mod.prereqTree,
            mod.id,
            renderablePrereqSet,
            resultEdges,
            edgeSet,
            "and",
            junctionNodes,
            activePositions,
          );
        } else {
          const edgeType = findEdgeType(mod.prereqTree, selectedNode) || "and";
          const edgeId = `${selectedNode}-${mod.id}`;
          if (!edgeSet.has(edgeId)) {
            edgeSet.add(edgeId);
            const isCompleted = completedIdSet.has(selectedNode);
            resultEdges.push(
              isCompleted
                ? createDirectDependencyEdge(selectedNode, mod.id, edgeType)
                : {
                    id: edgeId,
                    source: selectedNode,
                    target: mod.id,
                    label: edgeType === "or" ? "OR" : "AND",
                    style: {
                      stroke: "#d10000",
                      strokeDasharray: "5,5",
                    },
                    labelStyle: {
                      fontSize: "10px",
                      fill: "#d10000",
                    },
                  },
            );
          }
        }
      });

      // Call buildTree for all deep prerequisites
      deepPrereqs.forEach((prereqId) => {
        const prereqMod = modMap.get(prereqId);
        if (prereqMod && prereqMod.prereqTree) {
          buildTree(
            prereqMod.prereqTree,
            prereqId,
            renderablePrereqSet,
            resultEdges,
            edgeSet,
            "and",
            junctionNodes,
            activePositions,
          );
        }
      });
    } else {
      mods.forEach((mod) => {
        if (!mod.prereqTree) return;
        const prereqs = [...new Set(extractMods(mod.prereqTree))];
        const isSelected = mod.id === selectedNode;
        const isPrereqOfSelected = prereqs.includes(selectedNode);
        if (!isSelected && !isPrereqOfSelected) return;

        if (isSelected) {
          buildTree(
            mod.prereqTree,
            mod.id,
            completedIdSet,
            resultEdges,
            edgeSet,
            "and",
            junctionNodes,
            activePositions,
          );
        } else {
          const edgeType = findEdgeType(mod.prereqTree, selectedNode) || "and";
          const edgeId = `${selectedNode}-${mod.id}`;
          if (!edgeSet.has(edgeId)) {
            edgeSet.add(edgeId);
            const isCompleted = completedIdSet.has(selectedNode);
            resultEdges.push(
              isCompleted
                ? createDirectDependencyEdge(selectedNode, mod.id, edgeType)
                : {
                    id: edgeId,
                    source: selectedNode,
                    target: mod.id,
                    label: edgeType === "or" ? "OR" : "AND",
                    style: {
                      stroke: "#d10000",
                      strokeDasharray: "5,5",
                    },
                    labelStyle: {
                      fontSize: "10px",
                      fill: "#d10000",
                    },
                  },
            );
          }
        }
      });

      // Reverted: Add flat missing/ghost prerequisite edges for Full Simple Mode
      const selectedMissingPrereqs = MissingMods(prereqMap.get(selectedNode), completedIds) ?? [];
      selectedMissingPrereqs.forEach((prereq, index) => {
        if (Array.isArray(prereq)) {
          const junctionId = `junction-or-${selectedNode}-${prereq.join("-")}`;
          const edgeId = `${junctionId}-${selectedNode}`;
          const orColor = OR_COLORS[index % OR_COLORS.length];
          if (!edgeSet.has(edgeId)) {
            edgeSet.add(edgeId);
            resultEdges.push({
              id: edgeId,
              source: junctionId,
              target: selectedNode,
              style: { stroke: orColor, strokeDasharray: "5,5" },
            });
          }
          prereq.forEach((subPrereq) => {
            const subEdgeId = `${subPrereq}-${junctionId}`;
            if (!edgeSet.has(subEdgeId)) {
              edgeSet.add(subEdgeId);
              resultEdges.push({
                id: subEdgeId,
                source: subPrereq,
                target: junctionId,
                label: "OR",
                style: { stroke: orColor, strokeDasharray: "5,5" },
                labelStyle: { fontSize: "10px", fill: orColor },
              });
            }
          });
        } else {
          const edgeId = `${prereq}-${selectedNode}`;
          if (!edgeSet.has(edgeId)) {
            edgeSet.add(edgeId);
            resultEdges.push({
              id: edgeId,
              source: prereq,
              target: selectedNode,
              style: { stroke: "#d10000", strokeDasharray: "5,5" },
            });
          }
        }
      });
    }

    // Post-process edges to style satisfied vs unsatisfied status
    const processedEdges = resultEdges.map((edge) => {
      const isGhostSource = ghostNodes.some((gn) => gn.id === edge.source);
      const isSatisfied = completedIdSet.has(edge.source);
      if (!isSatisfied) {
        const isJunctionSource = edge.source.startsWith("junction-or-");
        const isJunctionTarget = edge.target.startsWith("junction-or-");
        const originalStroke = edge.style?.stroke || "#d10000";
        return {
          ...edge,
          style: {
            ...edge.style,
            stroke: (isJunctionSource || isJunctionTarget) ? originalStroke : "#d10000",
            strokeDasharray: "5,5",
            opacity: isGhostSource
              ? (measureGhostIds.has(edge.source) ? 1 : 0)
              : 1,
          },
          label: edge.label || "MISSING",
          labelStyle: {
            ...edge.labelStyle,
            fill: (isJunctionSource || isJunctionTarget) ? originalStroke : "#d10000",
            opacity: isGhostSource
              ? (measureGhostIds.has(edge.source) ? 1 : 0)
              : 1,
          },
        };
      }
      return edge;
    });

    return {
      nodes: [...styled, ...ghostNodes, ...junctionNodes],
      edges: selectedView === "focus" ? [] : processedEdges,
    };
    
  }, [
    baseNodes,
    selectedNode,
    selectedView,
    focusIds,
    ghostNodes,
    mods,
    activePositions,
    measureGhostIds,
    modMap,
    inGraph,
    deepPrereqs,
    completedIds,
    prereqMap,
  ]);

  const handleNodeClick = useCallback((_, node) => {
    setCustomPositions({});
    setSelectedNode((prev) => {
      if (prev === node.id) return null;
      setSelectedView("full");
      return node.id;
    });
  }, [setCustomPositions]);

  useEffect(() => {
    if (nodes.length === 0) return undefined;

    const frameId = requestAnimationFrame(() => {
      fitView({
        duration: 300,
        padding: selectedView === "focus" ? 0.3 : 0.15,
      });
    });

    return () => cancelAnimationFrame(frameId);
  }, [fitView, nodes.length, selectedNode, selectedView, showEligible]);

  const onNodesChange = useCallback(
    (changes) => {
      const baseNodeIds = new Set(baseNodes.map((n) => n.id));
      const ghostIds = new Set(ghostNodes.map((n) => n.id));

      // 1. Handle baseNodes changes
      const baseChanges = changes.filter((c) => baseNodeIds.has(c.id));
      if (baseChanges.length > 0) {
        setBaseNodes((nds) => applyNodeChanges(baseChanges, nds));
      }

      // Update custom positions if a node was dragged
      const positionChanges = changes.filter(
        (c) => c.type === "position" && c.position,
      );
      if (positionChanges.length > 0) {
        setCustomPositions((prev) => {
          const next = { ...prev };
          positionChanges.forEach((c) => {
            next[c.id] = c.position;
          });
          return next;
        });
      }

      // 2. Handle ghost measurement tracking
      const ghostDimensionChanges = changes.filter(
        (c) => c.type === "dimensions" && ghostIds.has(c.id),
      );
      if (ghostDimensionChanges.length > 0) {
        setMeasuredGhostState((prev) => {
          const next = new Set(
            prev.selectedNode === selectedNode ? prev.ids : [],
          );
          ghostDimensionChanges.forEach((c) => next.add(c.id));
          return { selectedNode, ids: next };
        });
      }
    },
    [baseNodes, ghostNodes, selectedNode, setCustomPositions],
  );

  const focusCompletedIds = useMemo(() => {
    if (!selectedNode) return completedIds;
    const plannedNode = (completedMods || []).find((m) => m.moduleId === selectedNode);
    if (!plannedNode) return completedIds;

    const nodeIndex = getTermIndex(plannedNode.planYear, plannedNode.planSemester);

    const ids = new Set();
    (completedMods || []).forEach((m) => {
      const plannedIndex = getTermIndex(m.planYear, m.planSemester);
      if (plannedIndex < nodeIndex) {
        ids.add(m.moduleId);
      }
    });

    localCompletedModIds.forEach((id) => ids.add(id));

    return Array.from(ids);
  }, [selectedNode, completedMods, completedIds, localCompletedModIds]);

  if (selectedNode && selectedView === "focus") {
    return (
      <FocusView
        mods={mods}
        allMods={allMods}
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
        prereqMap={prereqMap}
        modMap={modMap}
        completedIds={focusCompletedIds}
        selectedNode={selectedNode}
        setSelectedNode={setSelectedNode}
        selectedView={selectedView}
        setSelectedView={setSelectedView}
        baseNodes={baseNodes}
        setBaseNodes={setBaseNodes}
        centerNode={centerNode}
        onDrop={onDrop}
        onDragOver={onDragOver}
      />
    );
  }

  return (
    <div className="flex flex-row h-full w-full overflow-hidden">
      <Sidebar
        isOpen={isSideBarOpen}
        setIsOpen={setIsSideBarOpen}
        mods={allMods}
        inGraph={inGraph}
        centerNode={centerNode}
      />
      <div className="flex-1 relative h-full">
        <ReactFlow
          nodeTypes={nodeTypes}
          nodes={nodes}
          edges={edges}
          colorMode="dark"
          onNodeClick={handleNodeClick}
          onNodesChange={onNodesChange}
          fitView
          panOnScroll={true}
          selectionOnDrag={true}
          panOnDrag={false}
          onDrop={onDrop}
          onDragOver={onDragOver}
        >
          <Controls />
        </ReactFlow>
        <div className="absolute bottom-6 right-6 z-50">
          <div className="flex flex-col items-end gap-2">
            {selectedNode && (
              <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-1 shadow-lg">
                <button
                  type="button"
                  onClick={() => {
                    setCustomPositions({});
                    setSelectedView("focus");
                  }}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold ${
                    selectedView === "focus"
                      ? "bg-blue-500 text-white"
                      : "text-zinc-200 hover:bg-zinc-800"
                  }`}
                >
                  Focus
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCustomPositions({});
                    setSelectedView("full");
                  }}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold ${
                    selectedView === "full"
                      ? "bg-blue-500 text-white"
                      : "text-zinc-200 hover:bg-zinc-800"
                  }`}
                >
                  Full Simple
                </button>
              </div>
            )}
            <button
              onClick={() => {
                setCustomPositions({});
                // if a node is selected and we are show eligible mod mode, unselect the node
                // if its a eligible
                if (showEligible && eligibleMods.includes(selectedNode)) {
                  setSelectedNode(null);
                }
                setShowEligible(!showEligible);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold shadow-lg transition-all border ${
                showEligible
                  ? "bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-400"
                  : "bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border-zinc-700"
              }`}
            >
              {showEligible ? "Hide Eligible Mods" : "Show Eligible Mods"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
