import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import Carousel from "../../components/Carousel";
import data from "../mock/popularMovies.json";

afterEach(cleanup);
const items = data.results.map((result) => <li>{result.original_title}</li>);

describe("Carousel props", () => {
  it("should render with items", () => {
    render(<Carousel items={items} />);
  });
  it.todo("should render with left and right buttons");
});
describe("Carousel state", () => {
  it.todo("should update its visible carousel item based on index state");
  it.todo("should update index on click");
  it.todo("index should be able to loop");
});

it("matches snapshot", async () => {
  const result = render(<Carousel items={items} />);
  await expect(result).toMatchInlineSnapshot();
});
