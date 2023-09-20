import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";

import MovieOverview from "../../components/MovieOverview";

afterEach(cleanup);

// TODO: test props and state
describe("MovieOverview", () => {
  it("should render", () => {
    render(<MovieOverview movieDetails={} />);
  });
});

it("matches snapshot", async () => {
  const result = render(<MovieOverview movieDetails={} />);
  await expect(result).toMatchInlineSnapshot();
});
