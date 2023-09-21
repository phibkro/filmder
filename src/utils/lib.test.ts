import { describe, expect, it } from "vitest";
import { createPosterUrl } from "./lib";

describe("createPosterUrl", () => {
  it("should take in a string and return a string", () => {
    const str = "hello_world";
    expect(typeof createPosterUrl(str)).toBe("string");
  });
});
