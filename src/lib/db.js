import { PrismaClient } from '../generated/prisma'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'

const globalForPrisma = globalThis

const connectionString = process.env.DATABASE_URL

const pool = globalForPrisma.pgPool || new pg.Pool({
  connectionString,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 3000,
})
const adapter = globalForPrisma.prismaAdapter || new PrismaPg(pool)
const prisma = globalForPrisma.prisma || new PrismaClient({ adapter })

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.pgPool = pool
  globalForPrisma.prismaAdapter = adapter
  globalForPrisma.prisma = prisma
}

export default prisma

