import { describe, expect, it } from "vitest";

import { absoluteUrl, siteUrl } from "./site-url";

describe("site URL helpers", () => {
  it("normalizes absolute route URLs beneath the deployed site", () => {
    expect(absoluteUrl()).toBe(`${siteUrl}/`);
    expect(absoluteUrl("/evaluate")).toBe(`${siteUrl}/evaluate/`);
    expect(absoluteUrl("status/")).toBe(`${siteUrl}/status/`);
  });
});
