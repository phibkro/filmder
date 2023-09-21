import { cleanup, renderHook } from "@testing-library/react";
import { afterAll, describe, expect, it } from "vitest";
import { useNumberStore } from "./useNumberStore";

const key = "numbers";
const values = [123456, 654321];
describe("Number store", () => {
  afterAll(() => {
    localStorage.clear();
    cleanup();
  });

  expect(localStorage.getItem(key)).toBe(null);
  const hook = renderHook(() => useNumberStore(key));
  const { numberStore, addToStore, clearStore, removeFromStore } =
    hook.result.current;

  it("should initialize an empty array", () => {
    localStorage.clear();
    expect(localStorage.getItem(key)).toBe(null);
    const hook = renderHook(() => useNumberStore(key));
    const { numberStore } = hook.result.current;
    expect(JSON.parse(localStorage[key])).toEqual([]);
    expect(numberStore).toEqual([]);
  });
  it("updates local state & local storage", () => {
    addToStore(values[0]);
    expect(numberStore).toEqual([values[0]]);
    expect(JSON.parse(localStorage[key])).toEqual([values[0]]);
    addToStore(values[1]);
    expect(numberStore).toEqual(values.slice(0, 2));
    expect(JSON.parse(localStorage[key])).toEqual(values.slice(0, 2));
  });
  it("can remove values", () => {
    removeFromStore(values[0]);
    expect(numberStore).toEqual([]);
    expect(JSON.parse(localStorage[key])).toEqual([values[1]]);
  });
  it("can clear all values", () => {
    clearStore();
    expect(numberStore).toEqual([]);
    expect(JSON.parse(localStorage[key])).toEqual([]);
  });
  const secondResult = renderHook(() => useNumberStore(key));
  it("is automatically set if key already exists", () => {
    expect(secondResult.result.current.numberStore).toEqual([]);
    expect(localStorage.getItem(key)).toBe(key);
  });
});
