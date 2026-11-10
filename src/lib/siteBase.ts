/** Astro `base` — keep in sync with `astro.config.mjs`. */
export const SITE_BASE_PATH = "/website-chat4meet";

/** Root-absolute URL to a file in `/public` (works in dev and production). */
export function publicAssetUrl(path: string): string {
  const normalized = path.replace(/^\//, "");
  const base = SITE_BASE_PATH.endsWith("/")
    ? SITE_BASE_PATH
    : `${SITE_BASE_PATH}/`;
  return `${base}${normalized}`;
}
