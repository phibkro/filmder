import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useText } from "../../hooks/useText";

const key = "text";
describe("useText", () => {
  it("should initialize an empty string", () => {
    expect(localStorage.getItem(key)).toBe(null);
    const { result } = renderHook(() => useText(key));
    expect(localStorage[key]).toEqual("");
    expect(result.current[0]).toEqual("");
  });
  it("can set a value", () => {
    // TODO
  });
  it("updates on change", () => {
    // TODO
  });
  it("persists", () => {
    // TODO
  });
  it("is automatically set if key already exists", () => {
    // TODO
  });
});
// see https://testing-library.com/docs/react-testing-library/api/#renderhook
