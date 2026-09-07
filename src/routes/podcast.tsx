import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/podcast")({ component: PodcastLayout });

function PodcastLayout() {
  return <Outlet />;
}
