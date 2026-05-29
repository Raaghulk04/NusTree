-- AlterTable
ALTER TABLE "DegreePreset" RENAME CONSTRAINT "MajorTemplate_pkey" TO "DegreePreset_pkey";

-- AlterTable
ALTER TABLE "Module" ADD COLUMN     "fulfillreqs" TEXT[],
ADD COLUMN     "preclusion" TEXT,
ADD COLUMN     "prerequisite" TEXT;

-- AlterTable
ALTER TABLE "UserPlanModule" ALTER COLUMN "planYear" DROP DEFAULT,
ALTER COLUMN "planSemester" DROP DEFAULT;
