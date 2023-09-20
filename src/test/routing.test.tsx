import { render } from "@testing-library/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { expect, it } from "vitest";
import { mainRoutes } from "../routes/mainRoutes";
import { testRoutes } from "../routes/testRoutes";

const router = createBrowserRouter([...mainRoutes, testRoutes]);

it("matches snapshot", () => {
  const result = render(<RouterProvider router={router} />);
  expect(result).toMatchInlineSnapshot(`
    {
      "asFragment": [Function],
      "baseElement": <body>
        <div>
          <h2>
            Unexpected Application Error!
          </h2>
          <h3
            style="font-style: italic;"
          >
            404 Not Found
          </h3>
          <p>
            💿 Hey developer 👋
          </p>
          <p>
            You can provide a way better UX than this when your app throws errors by providing your own 
            <code
              style="padding: 2px 4px; background-color: rgba(200, 200, 200, 0.5);"
            >
              ErrorBoundary
            </code>
             or
             
            <code
              style="padding: 2px 4px; background-color: rgba(200, 200, 200, 0.5);"
            >
              errorElement
            </code>
             prop on your route.
          </p>
        </div>
      </body>,
      "container": <div>
        <h2>
          Unexpected Application Error!
        </h2>
        <h3
          style="font-style: italic;"
        >
          404 Not Found
        </h3>
        <p>
          💿 Hey developer 👋
        </p>
        <p>
          You can provide a way better UX than this when your app throws errors by providing your own 
          <code
            style="padding: 2px 4px; background-color: rgba(200, 200, 200, 0.5);"
          >
            ErrorBoundary
          </code>
           or
           
          <code
            style="padding: 2px 4px; background-color: rgba(200, 200, 200, 0.5);"
          >
            errorElement
          </code>
           prop on your route.
        </p>
      </div>,
      "debug": [Function],
      "findAllByAltText": [Function],
      "findAllByDisplayValue": [Function],
      "findAllByLabelText": [Function],
      "findAllByPlaceholderText": [Function],
      "findAllByRole": [Function],
      "findAllByTestId": [Function],
      "findAllByText": [Function],
      "findAllByTitle": [Function],
      "findByAltText": [Function],
      "findByDisplayValue": [Function],
      "findByLabelText": [Function],
      "findByPlaceholderText": [Function],
      "findByRole": [Function],
      "findByTestId": [Function],
      "findByText": [Function],
      "findByTitle": [Function],
      "getAllByAltText": [Function],
      "getAllByDisplayValue": [Function],
      "getAllByLabelText": [Function],
      "getAllByPlaceholderText": [Function],
      "getAllByRole": [Function],
      "getAllByTestId": [Function],
      "getAllByText": [Function],
      "getAllByTitle": [Function],
      "getByAltText": [Function],
      "getByDisplayValue": [Function],
      "getByLabelText": [Function],
      "getByPlaceholderText": [Function],
      "getByRole": [Function],
      "getByTestId": [Function],
      "getByText": [Function],
      "getByTitle": [Function],
      "queryAllByAltText": [Function],
      "queryAllByDisplayValue": [Function],
      "queryAllByLabelText": [Function],
      "queryAllByPlaceholderText": [Function],
      "queryAllByRole": [Function],
      "queryAllByTestId": [Function],
      "queryAllByText": [Function],
      "queryAllByTitle": [Function],
      "queryByAltText": [Function],
      "queryByDisplayValue": [Function],
      "queryByLabelText": [Function],
      "queryByPlaceholderText": [Function],
      "queryByRole": [Function],
      "queryByTestId": [Function],
      "queryByText": [Function],
      "queryByTitle": [Function],
      "rerender": [Function],
      "unmount": [Function],
    }
  `);
});
