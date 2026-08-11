import { describe, expect, it } from "vitest";

import {
  evaluationTracks,
  navigation,
  productLayers,
  repositories,
  siteConfig,
  statusFacts,
} from "./site";

describe("website content model", () => {
  it("keeps repository ownership explicit and unique", () => {
    expect(repositories).toHaveLength(5);
    expect(new Set(repositories.map((repository) => repository.id)).size).toBe(
      repositories.length,
    );
    expect(repositories.map((repository) => repository.id)).toEqual([
      "toolkit",
      "hook-service",
      "platform",
      "organization",
      "website",
    ]);
  });

  it("uses secure public links", () => {
    const links = [
      siteConfig.githubUrl,
      siteConfig.testingUrl,
      siteConfig.repositoryUrl,
      ...repositories.map((repository) => repository.url),
      ...evaluationTracks.map((track) => track.href),
    ];
    expect(links.every((link) => link.startsWith("https://"))).toBe(true);
  });

  it("keeps internal routes unique and statically known", () => {
    expect(new Set(navigation.map((item) => item.href)).size).toBe(navigation.length);
    expect(navigation.map((item) => item.href)).toContain("/evaluate");
    expect(navigation.map((item) => item.href)).toContain("/status");
  });

  it("describes three product layers and bounded status facts", () => {
    expect(productLayers.map((layer) => layer.name)).toEqual([
      "Toolkit",
      "Hook service",
      "Platform",
    ]);
    expect(statusFacts.map((fact) => fact.value)).toEqual([
      "Available",
      "Not yet",
      "Not operated",
      "Open",
    ]);
  });

  it("does not introduce unsupported public claims", () => {
    const corpus = JSON.stringify({
      repositories,
      evaluationTracks,
      productLayers,
      statusFacts,
    });
    expect(corpus).not.toMatch(
      /\b(?:guaranteed|production-ready|generally available|customers|revenue)\b/iu,
    );
  });
});
