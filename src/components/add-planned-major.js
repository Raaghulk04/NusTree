'use server'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import prisma from '@/lib/db'

export default async function addPlannedMajor(degree) {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session) throw new Error("Not Logged in")
    
    const slugify = (str) => 
        str.toLowerCase().trim()
           .replace(/\s+/g, '-')
           .replace(/[^a-z0-9-]/g, '')

    console.log('degree:', degree)
    console.log('slugified:', slugify(degree))

    const degreePreset = await prisma.degreePreset.findUnique({
        where: { degreeCode: slugify(degree) }
    })

    console.log('degreePreset found:', degreePreset)

    if (!degreePreset) throw new Error('Degree preset not found')    

    const degreePresetId = degreePreset.id
    const userId = session.user.id

    console.log('upserting:', { userId, degreePresetId })

    const result = await prisma.userPreset.upsert({
        where: { userId_degreePresetId: { userId, degreePresetId } },
        update: {},
        create: { userId, degreePresetId }
    })

    console.log('result:', result)
}
