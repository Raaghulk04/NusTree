import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import prisma from '@/lib/db'
import EligibleModClient from './eligibleModsClient'
import getAllMods from '../getAllMods'

export default async function EligibleModPage() {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session) redirect('/login')

    const mods = await getAllMods()
    const degrees = await prisma.userPreset.findMany({
        where: { userId: session.user.id }
    })

    const degreePresetIds = degrees.map(d => d.degreePresetId)

    const degreePresets = await prisma.degreePreset.findMany({
        where: { id: { in: degreePresetIds } }
    })
    const userMods = await prisma.userPlanModule.findMany({
        where: { userId: session.user.id }
    })

    return (
        <div>
            <EligibleModClient mods={mods} degree={degreePresets} userMods={userMods}/>
        </div>
    )
}