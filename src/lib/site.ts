import { damaged } from "@/content/damaged";
import type { SiteContent } from "@/content/types";

export type SiteId = SiteContent["id"];

export function siteFromPath(_pathname: string): SiteId {
  return "damaged";
}

export function contentFor(_id: SiteId): SiteContent {
  return damaged;
}

export function contentFromPath(_pathname: string): SiteContent {
  return damaged;
}

export function isActivePath(current: string, to: string) {
  if (to === "/") return current === "/";
  return current === to || current.startsWith(`${to}/`);
}
