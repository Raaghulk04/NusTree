import { PageLoader } from "@/components/page-loader";

export default function EligibleModsLoading() {
  return (
    <PageLoader
      message="Importing all NUS modules for you..."
      subtext="Analyzing prerequisite satisfaction and unlocking eligible courses..."
    />
  );
}
