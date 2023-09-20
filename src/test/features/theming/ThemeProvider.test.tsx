import { cleanup, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, it } from "vitest";

import { useTheme } from "../../../features/theming/themeProvider";

afterEach(cleanup);
beforeEach(() => {
  renderHook(() => useTheme());
});
// TODO: mock context environment
describe("useTheme with ThemeProvider", () => {
  it.todo("should be able to fetch theme");
  it.todo("should be able to change theme");
});

it("matches snapshot", () => {
  // const result = render(<ThemeProvider />);
  // expect(result).toMatchInlineSnapshot();
});
