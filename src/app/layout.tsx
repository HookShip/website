import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "@fontsource-variable/fraunces";
import "@fontsource-variable/ibm-plex-sans";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HookShip — Portable webhook infrastructure",
    template: "%s — HookShip",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: "technology",
  keywords: [
    "webhooks",
    "webhook delivery",
    "OpenAPI",
    "AsyncAPI",
    "Standard Webhooks",
    "developer portal",
    "event delivery",
  ],
  alternates: {
    canonical: absoluteUrl(),
  },
  openGraph: {
    type: "website",
    url: absoluteUrl(),
    title: "HookShip — Portable webhook infrastructure",
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary",
    title: "HookShip — Portable webhook infrastructure",
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f2eee5",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="site-frame">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
