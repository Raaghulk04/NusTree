'use server'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import prisma from '@/lib/db'

export default async function addCompletedModules(moduleId) {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session) throw new Error("Not Logged in")
    const userId = session.user.id
    await prisma.userPlanModule.create({
        data: {
            userId,
            moduleId,
        }
    })
}