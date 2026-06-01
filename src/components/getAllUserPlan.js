import prisma from "../lib/db"
import { authClient } from '@/lib/auth-client'

export default async function getAllMods() {
    const { data, isPending } = authClient.useSession()

    const mods = await prisma.userPlanModule.findMany({
        where: {
            id: data.user.id
        }
    });
    return mods;
}
