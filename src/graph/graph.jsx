import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useState, useMemo } from 'react'

export default function Graph({ allMods, takenMods, completedMods }) {
    const [selectedNode, setSelectedNode] = useState(null)

    const allModIds = new Set(allMods.map(m => m.id))
    const takenIds = new Set((takenMods || []).map(m => m.id))
    const completedIds = new Set((completedMods || []).map(m => m.moduleId))

    const getYLevel = (moduleId) => {
        const num = parseInt(moduleId.match(/\d+/)?.[0])
        if (num < 2000) return 0
        if (num < 3000) return 1
        if (num < 4000) return 2
        if (num < 5000) return 3
        return 4
    }

    const extractMods = (tree) => {
        if (!tree) return []
        if (typeof tree === 'string') return [tree.split(':')[0]]
        if (tree.or) return tree.or.flatMap(extractMods)
        if (tree.and) return tree.and.flatMap(extractMods)
        return []
    }

    const nodes = useMemo(() => {
        // 1. Group modules by their primary year level (1000, 2000, etc.)
        const byLevel = {}
        allMods.forEach(m => {
            const level = getYLevel(m.id)
            if (!byLevel[level]) byLevel[level] = []
            byLevel[level].push(m)
        })

        // 2. Track depth positions for modules within the same level
        const subLevelMapping = {}

        Object.keys(byLevel).forEach(level => {
            const currentLevelMods = byLevel[level]
            const levelModIds = new Set(currentLevelMods.map(m => m.id))

            // Helper function to calculate dependency chain depth
            const getDependencyDepth = (modId, visited = new Set()) => {
                if (visited.has(modId)) return 0 // Prevent infinite cycles
                visited.add(modId)

                const modObj = currentLevelMods.find(m => m.id === modId)
                if (!modObj || !modObj.prereqTree) return 0

                const prereqs = extractMods(modObj.prereqTree)
                // We ONLY care about prerequisites that live within this same year level
                const sameLevelPrereqs = prereqs.filter(p => levelModIds.has(p))

                if (sameLevelPrereqs.length === 0) return 0

                // Your depth is 1 + the deepest prerequisite chain beneath you
                return 1 + Math.max(...sameLevelPrereqs.map(p => getDependencyDepth(p, visited)))
            };

            // Map every module to its topological sub-level height offset
            currentLevelMods.forEach(m => {
                subLevelMapping[m.id] = getDependencyDepth(m.id)
            })
        })

        // 3. Build the ReactFlow structural layout grid
        return allMods.map(module => {
            const level = getYLevel(module.id)
            const levelMods = byLevel[level]
            
            // Get our calculated depth height offset (Row 0, Row 1, Row 2, etc.)
            const subLevelRow = subLevelMapping[module.id] || 0

            // To calculate horizontal spacing (x-axis), group items sharing the exact same sub-level row
            const sameRowMods = levelMods.filter(m => subLevelMapping[m.id] == subLevelRow)
            const posInRow = sameRowMods.findIndex(m => m.id === module.id)
            const totalInRow = sameRowMods.length

            const isSelected = module.id === selectedNode
            const isConnected = selectedNode && (() => {
                const prereqs = extractMods(module.prereqTree || null)
                return prereqs.includes(selectedNode)
            })()

            return {
                id: module.id,
                position: {
                    // X positions spread evenly based on how many share that specific dependency row
                    x: posInRow * 180 - (totalInRow * 90),
                    // 🔥 CRITICAL FIX: Add the subLevelRow offset to dynamically push dependencies down
                    y: (level * 350) + (subLevelRow * 90)
                },
                data: { label: module.id },
                style: {
                    backgroundColor:
                        completedIds.has(module.id) ? '#86efac' :
                        takenIds.has(module.id) ? '#93c5fd' :
                        '#e5e7eb',
                    borderRadius: '8px',
                    fontSize: '11px',
                    border: isSelected ? '2px solid #f59e0b' :
                            isConnected ? '2px solid #3b82f6' :
                            completedIds.has(module.id) ? '2px solid #22c55e' :
                            takenIds.has(module.id) ? '2px solid #3b82f6' :
                            '1px solid #d1d5db',
                    opacity: selectedNode && !isSelected && !isConnected ? 0.4 : 1,
                    cursor: 'pointer',
                }
            }
        })
    }, [allMods, selectedNode, completedIds, takenIds])

    const edges = useMemo(() => {
        if (!selectedNode) return []

        const result = []
        allMods.forEach(module => {
            if (!module.prereqTree) return
            const prereqs = [...new Set(extractMods(module.prereqTree))]
            prereqs.forEach(prereqId => {
                if (
                    allModIds.has(prereqId) &&
                    (module.id === selectedNode || prereqId === selectedNode)
                ) {
                    result.push({
                        id: `${prereqId}-${module.id}`,
                        source: prereqId,
                        target: module.id,
                        style: {
                            stroke: module.id === selectedNode ? '#ef4444' : '#3b82f6',
                            strokeWidth: 2
                        }
                    })
                }
            })
        })
        return result
    }, [selectedNode, allMods, allModIds])

    const handleNodeClick = (_, node) => {
        setSelectedNode(prev => prev === node.id ? null : node.id)
    }

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <div style={{ 
                padding: '8px 16px', 
                display: 'flex', 
                gap: '16px', 
                fontSize: '12px',
                background: '#fff',
                borderBottom: '1px solid #e5e7eb'
            }}>
                <span>🟢 Completed</span>
                <span>🔵 Eligible</span>
                <span>⬜ Locked</span>
                <span style={{ color: '#6b7280' }}>
                    Click a node to see prerequisites (red) and modules it unlocks (blue)
                </span>
            </div>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodeClick={handleNodeClick}
                fitView
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    )
}