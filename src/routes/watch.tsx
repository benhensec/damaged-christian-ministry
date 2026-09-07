import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/watch")({ component: WatchLayout });

function WatchLayout() {
  return <Outlet />;
}
