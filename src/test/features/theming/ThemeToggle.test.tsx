import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";

import ThemeToggle from "../../../features/theming/themeToggle";
import { ThemeProvider } from "../../../features/theming/themeProvider";

afterEach(cleanup);

// TODO: test props and state
describe("ThemeToggle", () => {
  it("should work", () => {
    render();
  });
});

it("matches snapshot", async () => {
  const result = render();
  await expect(result).toMatchInlineSnapshot();
});

// see https://testing-library.com/docs/react-testing-library/api/#render
