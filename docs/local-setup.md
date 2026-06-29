# Local Setup Guide

This guide is for someone who has never run this project before.

## 1. Install the tools you need

Make sure these are installed on your computer:

- `Node.js` (recommended: Node 20 or newer)
- `npm`
- `PostgreSQL`
- `git`

To check:

```bash
node -v
npm -v
psql --version
git --version
```

If one of these commands fails, install that tool first.

## 2. Download the project

Open a terminal and run:

```bash
git clone <YOUR_REPO_URL>
cd NusTree
```

If you already have the project folder, just open a terminal inside it.

## 3. Install the project dependencies

Run:

```bash
npm install
```

This installs everything the web app needs.

## 4. Create a PostgreSQL database

You need a local database for the app.

Open PostgreSQL and create a database:

```sql
CREATE DATABASE nustree;
```

If your PostgreSQL username is not `postgres`, that is fine. Just remember your:

- database name
- username
- password
- port

The default PostgreSQL port is usually `5432`.

## 5. Create the `.env` file

In the project root, create a file called `.env`.

Put this inside it:

```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/nustree"
BETTER_AUTH_URL="http://localhost:3000"
NEXT_PUBLIC_BETTER_AUTH_URL="http://localhost:3000"
```

Change:

- `postgres` to your PostgreSQL username if needed
- `YOUR_PASSWORD` to your real PostgreSQL password
- `nustree` if you used a different database name

## 6. Create the database tables

Run:

```bash
npx prisma migrate dev
```

This creates all the tables for:

- modules
- degree presets
- users
- sessions
- planner data

If Prisma asks for a migration name, you can enter something simple like:

```text
init
```

## 7. Seed the database with starter data

Run:

```bash
npm run seed
```

This loads:

- module data from `src/data/modules.json`
- degree preset data from `src/data/degree-presets.json`

Without this step, the app will open, but much of the planner data will be missing.

## 8. Start the web app

Run:

```bash
npm run dev
```

Wait until you see something like:

```text
Local: http://localhost:3000
```

Then open this in your browser:

```text
http://localhost:3000
```

## 9. Try the app

When the homepage opens:

1. Create an account using the sign-up page.
2. Log in with that account.
3. Open the planner page.
4. Try importing a degree preset.
5. Try searching modules.
6. Try the graph views and eligible modules page.

Because authentication is enabled, creating an account first is the easiest way to test the app.

## 10. If something goes wrong

### Problem: `DATABASE_URL` error

This means your `.env` file is missing or incorrect.

Check:

- the file is named exactly `.env`
- the database username/password are correct
- the database actually exists

### Problem: Prisma cannot connect to PostgreSQL

Make sure PostgreSQL is running.

Try:

```bash
psql -U postgres -d nustree
```

Replace `postgres` and `nustree` if you used different values.

### Problem: Tables exist but data is missing

Run the seed command again:

```bash
npm run seed
```

### Problem: Port 3000 is already in use

Stop the other app using port `3000`, or start this app on another port:

```bash
npm run dev -- --port 3001
```

Then open:

```text
http://localhost:3001
```

If you use another port, also update:

- `BETTER_AUTH_URL`
- `NEXT_PUBLIC_BETTER_AUTH_URL`

in your `.env` file to match that port.

## 11. Quick start version

If you already have PostgreSQL installed, these are the main commands:

```bash
npm install
```

Create `.env`:

```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/nustree"
BETTER_AUTH_URL="http://localhost:3000"
NEXT_PUBLIC_BETTER_AUTH_URL="http://localhost:3000"
```

Then run:

```bash
npx prisma migrate dev
npm run seed
npm run dev
```

Open:

```text
http://localhost:3000
```
