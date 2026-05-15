const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg'); 
const pg = require('pg');
const fs = require('fs');
const path = require('path');

// 1. Setup the connection pool
const connectionString = process.env.DATABASE_URL;
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);

// 2. Initialize the client with the adapter
const prisma = new PrismaClient({ adapter });

export default prisma;