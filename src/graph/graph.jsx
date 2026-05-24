import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

export default function Graph({ allMods, takenMods }) {

    return (
        <div style={{ height: 800, width: 600 }}>
            <ReactFlow>
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    )
}