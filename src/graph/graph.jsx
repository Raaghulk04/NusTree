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
        // group by year level
        const byLevel = {}
        allMods.forEach(m => {
            const level = getYLevel(m.id)
            if (!byLevel[level]) byLevel[level] = []
            byLevel[level].push(m)
        })

        // sort each level by number of same-level prereqs
        // fewer prereqs → left, more prereqs → right
        Object.keys(byLevel).forEach(level => {
            byLevel[level].sort((a, b) => {
                const aPrereqs = extractMods(a.prereqTree || null)
                    .filter(p => byLevel[level]?.find(m => m.id === p)).length
                const bPrereqs = extractMods(b.prereqTree || null)
                    .filter(p => byLevel[level]?.find(m => m.id === p)).length
                return aPrereqs - bPrereqs
            })
        })

        return allMods.map(module => {
            const level = getYLevel(module.id)
            const levelMods = byLevel[level]
            const posInLevel = levelMods.findIndex(m => m.id === module.id)
            const totalInLevel = levelMods.length

            const isSelected = module.id === selectedNode
            const isConnected = selectedNode && (() => {
                const prereqs = extractMods(module.prereqTree || null)
                return prereqs.includes(selectedNode)
            })()

            return {
                id: module.id,
                position: {
                    x: posInLevel * 160 - (totalInLevel * 80),
                    y: level * 200
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
        if (!selectedNode) return []  // no edges until a node is clicked

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
    }, [selectedNode, allMods])

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