import prisma from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
    const allDegreePreset = await prisma.degreePreset.findMany()
    return NextResponse.json(allDegreePreset)
}