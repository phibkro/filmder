import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";

import Card from "../../components/Card";

afterEach(cleanup);

// TODO: test props and state
describe("Card", () => {
  it("should render", () => {
    const result = render(
      <Card src="/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg" alt="Barbie movie" />,
    );
  });
});

it("matches snapshot", async () => {
  const result = render(
    <Card src="/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg" alt="Barbie movie" />,
  );
  await expect(result).toMatchInlineSnapshot(`
    {
      "asFragment": [Function],
      "baseElement": <body>
        <div>
          <div
            class="card"
          >
            <img
              alt="Barbie movie"
              src="/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
              width="225"
            />
            <svg
              class="hover star"
              fill="none"
              height="2.5em"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="2.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              />
            </svg>
          </div>
        </div>
      </body>,
      "container": <div>
        <div
          class="card"
        >
          <img
            alt="Barbie movie"
            src="/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
            width="225"
          />
          <svg
            class="hover star"
            fill="none"
            height="2.5em"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="2.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
        </div>
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