import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HookShip",
    short_name: "HookShip",
    description:
      "Contract-first webhook tooling, portable delivery, and a managed control plane.",
    start_url: "./",
    display: "standalone",
    background_color: "#f2eee5",
    theme_color: "#10231f",
  };
}
