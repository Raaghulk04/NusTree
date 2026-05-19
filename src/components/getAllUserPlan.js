import prisma from "../lib/db"

export default async function getAllMods() {
    const mods = await prisma.userPlanModule.findMany();
    return mods;
}