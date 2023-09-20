import { cleanup, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import MoviePage from "../../pages/movie-page";

afterEach(cleanup);
beforeEach(() => {
  render(<MoviePage />);
});
describe("MoviePage", () => {
  it.todo("should render properly");
  it.todo("should access url parameters", () => {});
});
describe.todo("MoviePage renders conditionally", () => {
  it.todo("handles errors and displays errors");
  it.todo("has a loading state");
  it.todo("should dynamically fetch data based on url parameters");
});

it("matches snapshot", () => {
  const result = render(<MoviePage />);
  expect(result).toMatchInlineSnapshot();
});
