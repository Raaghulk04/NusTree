-- CreateTable
CREATE TABLE "UserAddModule" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "moduleId" TEXT NOT NULL,
    "planYear" INTEGER NOT NULL,
    "planSemester" INTEGER NOT NULL,
    "isPresetModule" BOOLEAN NOT NULL DEFAULT false,
    "degreePresetId" TEXT,

    CONSTRAINT "UserAddModule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "UserAddModule_userId_planYear_planSemester_idx" ON "UserAddModule"("userId", "planYear", "planSemester");

-- CreateIndex
CREATE INDEX "UserAddModule_degreePresetId_idx" ON "UserAddModule"("degreePresetId");

-- CreateIndex
CREATE UNIQUE INDEX "UserAddModule_userId_moduleId_key" ON "UserAddModule"("userId", "moduleId");

-- AddForeignKey
ALTER TABLE "UserAddModule" ADD CONSTRAINT "UserAddModule_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAddModule" ADD CONSTRAINT "UserAddModule_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAddModule" ADD CONSTRAINT "UserAddModule_degreePresetId_fkey" FOREIGN KEY ("degreePresetId") REFERENCES "DegreePreset"("id") ON DELETE CASCADE ON UPDATE CASCADE;
