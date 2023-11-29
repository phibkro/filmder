import { renderHook } from "@testing-library/react";
import { afterAll, describe, expect, it } from "vitest";
import { useText } from "./useText";

const key = "key";
const value = "value";
describe("useText", () => {
  afterAll(() => {
    localStorage.clear();
  });

  expect(localStorage.getItem(key)).toBe(null);
  const hook = renderHook(() => useText(key));
  const [text, setText] = hook.result.current;

  it("should initialize an empty string", () => {
    expect(localStorage.getItem(key)).toBe("");
    expect(text).toBe("");
  });
  it("updates local state & local storage", () => {
    setText(value);
    expect(text).toBe(value);
    expect(localStorage.getItem(key)).toBe(value);
  });
  it("can reassign values", () => {
    setText(key);
    expect(text).toBe(key);
    expect(localStorage.getItem(key)).toBe(key);
  });
  const secondResult = renderHook(() => useText(key));
  it("is automatically set if key already exists", () => {
    expect(secondResult.result.current[0]).toBe(key);
    expect(localStorage.getItem(key)).toBe(key);
  });
});
// see https://testing-library.com/docs/react-testing-library/api/#renderhook
