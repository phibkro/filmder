import data from "@/mock-data/barbie.json";
import { cleanup, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

afterEach(cleanup);

// TODO: test props and state
describe("MovieOverview", () => {
  beforeEach(() => {
    // render(<MovieOverview movieDetails={data} />);
  });
  it("should render with props", async () => {
    await screen.findByRole("main");

    expect(screen.findByRole("img")).toBeTruthy();
    expect(screen.findByAltText("Filmcover for" + data.original_title));

    expect(screen.findByDisplayValue(data.original_title)).toBeTruthy();
    expect(screen.findByDisplayValue(data.overview)).toBeTruthy();
    expect(screen.findByDisplayValue(data.original_language)).toBeTruthy();
    data.genres.map((genre) =>
      expect(screen.findByDisplayValue(genre.name)).toBeTruthy(),
    );
    expect(screen.findByDisplayValue(data.release_date)).toBeTruthy();
    expect(screen.findByDisplayValue(data.vote_average)).toBeTruthy();
    expect(screen.findByDisplayValue(data.popularity)).toBeTruthy();
  });
});

it("matches snapshot", async () => {
  // const result = render(<MovieOverview movieDetails={data} />);
  // expect(result).toMatchInlineSnapshot();
});
