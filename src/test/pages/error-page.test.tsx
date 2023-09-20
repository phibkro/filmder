import { cleanup, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import ErrorPage from "../../pages/error-page";

afterEach(cleanup);
beforeEach(() => {
  render(<ErrorPage />);
});
describe("ErrorPage", () => {
  it.todo("should render properly");
});

it("matches snapshot", () => {
  const result = render(<ErrorPage />);
  expect(result).toMatchInlineSnapshot();
});
