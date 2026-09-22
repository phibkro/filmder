import data from "@/mock-data/popularMovies.json";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";

import MovieApp from "./MovieApp";

beforeEach(() => {
  localStorage.clear();
});

afterEach(cleanup);

it("filters the movie list to stored favorites", async () => {
  const favorite = data.results[0];
  localStorage.setItem("favorites", JSON.stringify([favorite.id]));
  const user = userEvent.setup();

  render(
    <MemoryRouter>
      <MovieApp movieListResults={data.results} />
    </MemoryRouter>,
  );

  await user.selectOptions(screen.getByRole("combobox"), "favorites");

  expect(
    screen.getByRole("option", { name: "show only favorites" }),
  ).toHaveProperty("selected", true);
  expect(within(screen.getByRole("list")).getAllByRole("img")).toHaveLength(1);
  expect(localStorage.getItem("show")).toBe("favorites");
});
