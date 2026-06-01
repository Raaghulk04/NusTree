'use server'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import prisma from '@/lib/db'

export default async function addPlannedModule(moduleId, planYear, planSemester) {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session) throw new Error("Not Logged in")

    const normalizedPlanYear = Number(planYear)
    const normalizedPlanSemester = Number(planSemester)

    if (!Number.isInteger(normalizedPlanYear) || normalizedPlanYear < 1) {
        throw new Error("Invalid plan year")
    }

    if (!Number.isInteger(normalizedPlanSemester) || ![1, 2].includes(normalizedPlanSemester)) {
        throw new Error("Invalid plan semester")
    }

    const userId = session.user.id
    await prisma.userPlanModule.upsert({
        where: {
            userId_moduleId: {
                userId,
                moduleId,
            },
        },
        update: {
            planYear: normalizedPlanYear,
            planSemester: normalizedPlanSemester,
        },
        create: {
            userId,
            moduleId,
            planYear: normalizedPlanYear,
            planSemester: normalizedPlanSemester,
            isPresetModule: false,
        },
    })
}
