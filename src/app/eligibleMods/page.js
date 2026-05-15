'use server'
import EligibleModClient from './eligibleModsClient'; 
import getAllMods from '../getAllMods'

export default async function eligibleModPage() {
    const mods = await getAllMods();
    return (
        <div>
            <EligibleModClient mods={mods}/>
        </div>
    )
}