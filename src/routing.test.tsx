import { render } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import { expect, it } from "vitest";
import { appRouter } from "./router";

it("matches snapshot", () => {
  const result = render(<RouterProvider router={appRouter} />);
  expect(result).toMatchInlineSnapshot();
});
