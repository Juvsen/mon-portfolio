import { describe, expect, it } from "vitest";

import { cn } from "./utils";

describe("cn", () => {
  it("merges utility classes and keeps the last conflicting class", () => {
    expect(cn("px-2", "px-4", "text-white", "text-blue-500")).toBe("px-4 text-blue-500");
  });
});
