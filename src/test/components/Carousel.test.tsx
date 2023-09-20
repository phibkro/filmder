import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";

import Carousel from "../../components/Carousel";

afterEach(cleanup);

// TODO: test props and state
describe("Carousel", () => {
  it("should render", () => {
    render(<Carousel items={} />);
  });
});

it("matches snapshot", async () => {
  const result = render(<Carousel items={} />);
  await expect(result).toMatchInlineSnapshot();
});
