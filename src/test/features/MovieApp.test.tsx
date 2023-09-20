import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";

import MovieApp from "../../features/MovieApp";

afterEach(cleanup);

// TODO: test props and state
describe("MovieApp", () => {
  it("should render", () => {
    render(<MovieApp />);
  });
});

it("matches snapshot", async () => {
  const result = render(<MovieApp />);
  await expect(result).toMatchInlineSnapshot();
});
