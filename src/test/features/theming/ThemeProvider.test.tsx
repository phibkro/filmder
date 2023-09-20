import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render, renderHook } from "@testing-library/react";

import {
  ThemeProvider,
  useTheme,
} from "../../../features/theming/themeProvider";

afterEach(cleanup);

// TODO: test props and state
describe("useTheme with ThemeProvider", () => {
  it("should work", () => {
    render();
  });
});

it("matches snapshot", async () => {
  const result = render();
  await expect(result).toMatchInlineSnapshot();
});
