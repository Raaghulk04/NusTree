-- CreateTable
CREATE TABLE IF NOT EXISTS "Module" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "department" TEXT,
    "workload" DOUBLE PRECISION,
    "prereqTree" JSONB,

    CONSTRAINT "Module_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "MajorTemplate" (
    "id" TEXT NOT NULL,
    "majorCode" TEXT NOT NULL,
    "majorName" TEXT NOT NULL,

    CONSTRAINT "MajorTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "UserPlanModule" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "moduleId" TEXT NOT NULL,
    "semesterTag" TEXT,
    "colorTag" TEXT,
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserPlanModule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "MajorTemplate_majorCode_key" ON "MajorTemplate"("majorCode");

-- AddForeignKey
ALTER TABLE "UserPlanModule" ADD CONSTRAINT "UserPlanModule_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
