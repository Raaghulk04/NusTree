export default function PlannedModulesList({ plannedModules, onRemove, removingModuleId }) {
    if (!plannedModules || !Array.isArray(plannedModules)) return null
    
    if (plannedModules.length === 0) {
        return (
            <div>
                <p>add planned modules to see them here</p>
            </div>
        )
    }
    
    return (
        <div className="space-y-2">
            {plannedModules.map((mod) => (
                <div key={mod.id} className="flex items-center justify-between p-2 border rounded">
                    <div>
                        <span className="font-semibold">{mod.moduleId}</span> ({`Y${mod.planYear}S${mod.planSemester}`})
                        {mod.isPresetModule ? ' preset' : ''}
                    </div>
                    <button
                        type="button"
                        onClick={() => onRemove(mod.moduleId)}
                        disabled={removingModuleId == mod.moduleId}
                        className="ml-4 px-2 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200 disabled:opacity-50"
                    >
                        {removingModuleId === mod.moduleId ? 'Removing...' : 'Remove'}
                    </button>
                </div>
            ))}
        </div>
    )
}
