import { cleanup, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import MovieApp from "../../features/MovieApp";
import data from "../mock/popularMovies.json";

afterEach(cleanup);
beforeEach(() => {
  render(<MovieApp movieListResults={data.results} />);
});
describe("MovieApp props", () => {
  it.todo("should render properly");
  it.todo("should generate items with data movieListResults", () => {});
});
// state
describe.todo("MovieApp interactivity", () => {
  it.todo("should be able to filter movie list");
  it.todo("should be able to show all movie results");
  it.todo("should be able to show only favorites");
  it.todo("should be able to hide favorites");
  it.todo("should be able to select movies to show/hide with select button");
});

it("matches snapshot", () => {
  const result = render(<MovieApp movieListResults={data.results} />);
  expect(result).toMatchInlineSnapshot();
});
