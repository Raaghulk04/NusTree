'use client'
import prisma from "../lib/db"
import { authClient } from '@/lib/auth-client'

export default async function getAllMods() {
    const { data, isPending } = authClient.useSession()

    const degrees = await prisma.userPreset.findMany({
        where: {
            userId: data.user.id
        }
    });
    return degrees;
}