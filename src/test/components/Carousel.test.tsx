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

it("matches snapshot", () => {
  const result = render(<Carousel items={items} />);
  expect(result).toMatchInlineSnapshot(`
    {
      "asFragment": [Function],
      "baseElement": <body>
        <div>
          <div
            class="carousel"
          >
            <svg
              class="hover"
              fill="none"
              height="3.5em"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="3.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m15 18-6-6 6-6"
              />
            </svg>
            <li>
              Talk to Me
            </li>
            <svg
              class="hover"
              fill="none"
              height="3.5em"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="3.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m9 18 6-6-6-6"
              />
            </svg>
          </div>
        </div>
      </body>,
      "container": <div>
        <div
          class="carousel"
        >
          <svg
            class="hover"
            fill="none"
            height="3.5em"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="3.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m15 18-6-6 6-6"
            />
          </svg>
          <li>
            Talk to Me
          </li>
          <svg
            class="hover"
            fill="none"
            height="3.5em"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="3.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m9 18 6-6-6-6"
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
