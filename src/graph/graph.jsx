import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useState } from 'react'

export default function Graph({ allMods, takenMods }) {
    
    const nodes = allMods.map((module, index) => (
        {
            id: module.id,
            position: { 
                x: (index % 5) * 400, 
                y: Math.floor(index / 5) * 200
            },
            data: { label: module.id }, 
        }
    ))

    const edges = []

    const extractMods = (tree) => {
        if (!tree) {
            return []
        } 
        if (typeof tree === 'string') {
            return [tree.split(':')[0]]  
        }
        if (tree.or) return tree.or.flatMap(extractMods)
        if (tree.and) return tree.and.flatMap(extractMods)
        return []
    }

    allMods.forEach((module) => {
        if (!module.prereqTree) {
            return
        }

        const prereqMods = [...new Set(extractMods(module.prereqTree))]
        
        prereqMods
            .forEach(mod => {
                edges.push(
                    {
                        id: `${mod}-${module.id}`,
                        source: mod,
                        target: module.id,
                    }
                )
            })
    
    })

    return (
        <div style={{ height: 800, width: 1000 }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}    
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    )
}