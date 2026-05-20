'use server'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import prisma from '@/lib/db'

export default async function addPlannedModule(moduleId) {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session) throw new Error("Not Logged in")
    const userId = session.user.id
    await prisma.userPlanModule.upsert({
        where: {
            userId_moduleId: {
                userId,
                moduleId,
            },
        },
        update: {},
        create: {
            userId,
            moduleId,
            planYear: 1,
            planSemester: 1,
            isPresetModule: false,
        },
    })
}
