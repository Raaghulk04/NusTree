'use client'
import { useModuleStore } from '@/store/useModuleStore'

export default function EligibleModClient({ mods }) {

    const completedMods = useModuleStore((state) => state.completedMods)
    const dsa = mods.find(module => module.id === 'CS2040S');
    
    const isSatisfied = (tree, completedMods) => {
        if (typeof tree === 'String') {
            console.log('String')
        } 
    }
    const eligibleMods = mods.filter(module => {

    })
    return (
        <div>

        </div>
    )
}