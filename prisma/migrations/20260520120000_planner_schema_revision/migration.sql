-- Rename the preset table so existing rows remain available under the new model.
ALTER TABLE "MajorTemplate" RENAME TO "DegreePreset";
ALTER TABLE "DegreePreset" RENAME COLUMN "majorCode" TO "degreeCode";
ALTER TABLE "DegreePreset" RENAME COLUMN "majorName" TO "degreeName";
ALTER INDEX "MajorTemplate_majorCode_key" RENAME TO "DegreePreset_degreeCode_key";

-- Promote planner rows from free-form tags to structured placement.
ALTER TABLE "UserPlanModule"
    ADD COLUMN "planYear" INTEGER,
    ADD COLUMN "planSemester" INTEGER,
    ADD COLUMN "isPresetModule" BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN "degreePresetId" TEXT;

UPDATE "UserPlanModule"
SET
    "planYear" = COALESCE(((regexp_match("semesterTag", '^Y([0-9]+)S([0-9]+)$'))[1])::INTEGER, 1),
    "planSemester" = COALESCE(((regexp_match("semesterTag", '^Y([0-9]+)S([0-9]+)$'))[2])::INTEGER, 1);

ALTER TABLE "UserPlanModule"
    ALTER COLUMN "planYear" SET NOT NULL,
    ALTER COLUMN "planSemester" SET NOT NULL,
    ALTER COLUMN "planYear" SET DEFAULT 1,
    ALTER COLUMN "planSemester" SET DEFAULT 1;

ALTER TABLE "UserPlanModule"
    DROP COLUMN "semesterTag",
    DROP COLUMN "colorTag",
    DROP COLUMN "completed";

-- Keep one current planner row per user/module pair.
DELETE FROM "UserPlanModule" a
USING "UserPlanModule" b
WHERE a."userId" = b."userId"
  AND a."moduleId" = b."moduleId"
  AND a.ctid < b.ctid;

-- Degree preset module membership and user preset selection.
CREATE TABLE "DegreePresetModule" (
    "degreePresetId" TEXT NOT NULL,
    "moduleId" TEXT NOT NULL,

    CONSTRAINT "DegreePresetModule_pkey" PRIMARY KEY ("degreePresetId","moduleId")
);

CREATE TABLE "UserPreset" (
    "userId" TEXT NOT NULL,
    "degreePresetId" TEXT NOT NULL,
    "importedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserPreset_pkey" PRIMARY KEY ("userId","degreePresetId")
);

CREATE UNIQUE INDEX "UserPlanModule_userId_moduleId_key" ON "UserPlanModule"("userId", "moduleId");
CREATE INDEX "UserPlanModule_userId_planYear_planSemester_idx" ON "UserPlanModule"("userId", "planYear", "planSemester");
CREATE INDEX "UserPlanModule_degreePresetId_idx" ON "UserPlanModule"("degreePresetId");

ALTER TABLE "UserPlanModule"
    ADD CONSTRAINT "UserPlanModule_userId_fkey"
    FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "UserPlanModule"
    ADD CONSTRAINT "UserPlanModule_degreePresetId_fkey"
    FOREIGN KEY ("degreePresetId") REFERENCES "DegreePreset"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "DegreePresetModule"
    ADD CONSTRAINT "DegreePresetModule_degreePresetId_fkey"
    FOREIGN KEY ("degreePresetId") REFERENCES "DegreePreset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "DegreePresetModule"
    ADD CONSTRAINT "DegreePresetModule_moduleId_fkey"
    FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "UserPreset"
    ADD CONSTRAINT "UserPreset_userId_fkey"
    FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "UserPreset"
    ADD CONSTRAINT "UserPreset_degreePresetId_fkey"
    FOREIGN KEY ("degreePresetId") REFERENCES "DegreePreset"("id") ON DELETE CASCADE ON UPDATE CASCADE;
