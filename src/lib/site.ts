import { damaged } from "@/content/damaged";
import type { SiteContent } from "@/content/types";
import { withPublicBase } from "@/lib/asset";

export type SiteId = SiteContent["id"];

const site = withPublicBase(damaged);

export function siteFromPath(_pathname: string): SiteId {
  return "damaged";
}

export function contentFor(_id: SiteId): SiteContent {
  return site;
}

export function contentFromPath(_pathname: string): SiteContent {
  return site;
}

export function isActivePath(current: string, to: string) {
  if (to === "/") return current === "/";
  return current === to || current.startsWith(`${to}/`);
}
