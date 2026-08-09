import { PageLoader } from "@/components/page-loader";

export default function SettingsLoading() {
  return (
    <PageLoader
      message="Loading your settings..."
      subtext="Fetching account security preferences and profile details..."
    />
  );
}
