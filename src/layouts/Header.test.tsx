import { cleanup, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import Header from "./Header";

afterEach(cleanup);
beforeEach(() => {
  render(<Header />);
});
describe("Header", () => {
  it.todo("should render properly");
});

it("matches snapshot", () => {
  const result = render(<Header />);
  expect(result).toMatchInlineSnapshot();
});
