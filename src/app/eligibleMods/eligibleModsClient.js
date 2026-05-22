'use client'
import { useModuleStore } from '../../store/useModuleStore'

export default function EligibleModClient({ mods }) {

    const completedMods = useModuleStore((state) => state.completedMods)
    console.log(completedMods[0])
    console.log(mods[0].id)
    const dsa = mods.find(module => module.id === 'CS2040S')
    
    const isSatisfied = (tree, completedMods) => {
        if (!tree) return true // no prereqs, always eligible
        if (typeof tree === 'string') {
            const modCode = tree.split(":")[0]
            return completedMods.includes(modCode)
        }
        if (tree.or) return tree.or.some(t => isSatisfied(t, completedMods))
        if (tree.and) return tree.and.every(t => isSatisfied(t, completedMods))
        return true
    }

    const eligibleMods = mods.filter(module => isSatisfied(module.prereqTree, completedMods))   
    console.log("hello", eligibleMods);
    eligibleMods.forEach(module => console.log(module))
    return (
        <div>
            {eligibleMods.map(module => <p key={module.id}>{module.id}</p>)}
        </div>
    )
}