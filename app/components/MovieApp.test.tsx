import data from "@/mock-data/popularMovies.json";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import MovieApp from "./MovieApp";

afterEach(cleanup);
beforeEach(() => {
  render(<MovieApp movieListResults={data.results} />);
});
describe("MovieApp props", () => {
  it.todo("should render properly", () => {});
  it.todo("should generate items with data movieListResults", () => {});
});
// state
// const user = userEvent.setup();
describe("MovieApp interactivity", () => {
  it("should be able to select movies to show/hide with select button", async () => {
    expect(screen.getByRole("listbox")).toBeTruthy();
    const selectElement = await screen.findByRole("listbox");
    await userEvent.selectOptions(selectElement, "favorites");
    expect(screen.getByText("show only favorites").ariaSelected).toBe(true);
  });
  it.todo("should be able to filter movie list", () => {});
  it.todo("should be able to show all movie results");
  it.todo("should be able to show only favorites");
  it.todo("should be able to hide favorites");
});

it("matches snapshot", () => {
  const result = render(<MovieApp movieListResults={data.results} />);
  expect(result).toMatchInlineSnapshot();
});
