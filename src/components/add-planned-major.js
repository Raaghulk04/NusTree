'use server'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import prisma from '@/lib/db'

export default async function addPlannedMajor(degree) {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session) throw new Error("Not Logged in")

    const degreePreset = await prisma.degreePreset.findUnique({
        where: { degreeCode: degree }
    })

    if (!degreePreset) throw new Error('Degree preset not found')    

    const degreePresetId = degreePreset.id
    const userId = session.user.id

    await prisma.userPreset.upsert({
        where: { userId_degreePresetId: { userId, degreePresetId } },
        update: {},
        create: { userId, degreePresetId }
    })
}
