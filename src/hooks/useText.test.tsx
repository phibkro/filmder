import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import { useText } from "./useText";

describe("useText", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("restores and persists the keyed value", () => {
    localStorage.setItem("query", "before");
    const { result } = renderHook(() => useText("query"));

    expect(result.current[0]).toBe("before");

    act(() => {
      result.current[1]("after");
    });

    expect(result.current[0]).toBe("after");
    expect(localStorage.getItem("query")).toBe("after");
  });
});
