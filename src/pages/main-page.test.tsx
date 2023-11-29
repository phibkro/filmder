import { cleanup, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import MainPage from "./main-page";

afterEach(cleanup);
beforeEach(() => {
  render(<MainPage />);
});
describe("Root props", () => {
  it.todo("should render properly");
  it.todo("should generate items with data movieListResults", () => {});
});
describe.todo("Root renders conditionally", () => {
  it.todo("handles errors and displays errors");
  it.todo("has a loading state");
});

it("matches snapshot", () => {
  const result = render(<MainPage />);
  expect(result).toMatchInlineSnapshot();
});
