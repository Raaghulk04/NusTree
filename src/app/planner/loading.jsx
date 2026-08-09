import { PageLoader } from "@/components/page-loader";

export default function PlannerLoading() {
  return (
    <PageLoader
      message="Importing all NUS modules for you..."
      subtext="Loading your academic plan, degree presets, and module tracker..."
    />
  );
}
