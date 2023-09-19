import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useNumberStore } from "../../hooks/useNumberStore";

const key = "numbers";
describe("Number store", () => {
  it("should initialize an empty array", () => {
    expect(localStorage.getItem(key)).toBe(null);
    const { result } = renderHook(() => useNumberStore("numbers"));
    expect(JSON.parse(localStorage[key])).toEqual([]);
    expect(result.current.numberStore).toEqual([]);
  });
});
