export default function PlannedModulesList({ plannedModules }) {
    if (!plannedModules || !Array.isArray(plannedModules)) return null
    
    if (plannedModules.length === 0) {
        return (
            <div>
                <p>add planned modules to see them here</p>
            </div>
        )
    }
    
    return (
        <div>
            {plannedModules.map((mod) => (
                <p key={mod.id}>
                    {mod.moduleId} ({`Y${mod.planYear}S${mod.planSemester}`})
                    {mod.isPresetModule ? ' preset' : ''}
                </p>
            ))}
        </div>
    )
}
