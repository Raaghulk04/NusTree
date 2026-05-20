export default function Completed({ completed }) {
    if (!completed || !Array.isArray(completed)) return null
    
    if (completed.length === 0) {
        return (
            <div>
                <p>add mods to see them here</p>
            </div>
        )
    }
    
    return (
        <div>
            {completed.map(mod => <p key={mod.id}>{mod.moduleId}</p>)}
        </div>
    )
}