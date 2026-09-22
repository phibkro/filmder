import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import { useNumberStore } from "./useNumberStore";

describe("useNumberStore", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("restores, deduplicates, removes, and persists values", () => {
    localStorage.setItem("favorites", JSON.stringify([11]));
    const { result } = renderHook(() => useNumberStore("favorites"));

    expect(result.current.numberStore).toEqual([11]);

    act(() => {
      result.current.addToStore(22);
    });
    act(() => {
      result.current.addToStore(22);
    });
    expect(result.current.numberStore).toEqual([11, 22]);
    expect(localStorage.getItem("favorites")).toBe("[11,22]");

    act(() => {
      result.current.removeFromStore(11);
    });
    expect(result.current.numberStore).toEqual([22]);

    act(() => {
      result.current.clearStore();
    });
    expect(result.current.numberStore).toEqual([]);
    expect(localStorage.getItem("favorites")).toBe("[]");
  });
});
