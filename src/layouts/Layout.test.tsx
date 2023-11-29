import { cleanup, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import Layout from "./Layout";

afterEach(cleanup);
beforeEach(() => {
  render(<Layout />);
});
describe("Layout", () => {
  it.todo("should render properly");
  it.todo("should render children");
});

it("matches snapshot", () => {
  const result = render(<Layout />);
  expect(result).toMatchInlineSnapshot();
});
