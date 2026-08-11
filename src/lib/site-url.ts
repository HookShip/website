const fallbackSiteUrl = "https://hookship.github.io/website";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl).replace(
  /\/+$/u,
  "",
);

export function absoluteUrl(path = "/"): string {
  const normalized = path === "/" ? "/" : `/${path.replace(/^\/|\/$/gu, "")}/`;
  return `${siteUrl}${normalized}`;
}
