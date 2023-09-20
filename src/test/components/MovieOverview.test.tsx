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
  const result = render(<MovieOverview movieDetails={data} />);
  await expect(result).toMatchInlineSnapshot(`
    {
      "asFragment": [Function],
      "baseElement": <body>
        <div>
          <main
            class="movie-overview"
          >
            <div
              class="card"
            >
              <img
                alt="Filmcover forBarbie"
                src="https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
                width="325"
              />
            </div>
            <section>
              <h2>
                Barbie
              </h2>
              <p>
                Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.
              </p>
              <div>
                <div>
                  <h3>
                    Language
                  </h3>
                  <p>
                    en
                  </p>
                </div>
                <div>
                  <h3>
                    Genre
                  </h3>
                  <p>
                    Comedy, 
                    Adventure, 
                    Fantasy
                  </p>
                </div>
                <div>
                  <h3>
                    Release date
                  </h3>
                  <p>
                    2023-07-19
                  </p>
                </div>
                <div>
                  <h3>
                    Vote average
                  </h3>
                  <p>
                    7.3
                  </p>
                </div>
                <div>
                  <h3>
                    Popularity
                  </h3>
                  <p>
                    2820.205
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </body>,
      "container": <div>
        <main
          class="movie-overview"
        >
          <div
            class="card"
          >
            <img
              alt="Filmcover forBarbie"
              src="https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
              width="325"
            />
          </div>
          <section>
            <h2>
              Barbie
            </h2>
            <p>
              Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.
            </p>
            <div>
              <div>
                <h3>
                  Language
                </h3>
                <p>
                  en
                </p>
              </div>
              <div>
                <h3>
                  Genre
                </h3>
                <p>
                  Comedy, 
                  Adventure, 
                  Fantasy
                </p>
              </div>
              <div>
                <h3>
                  Release date
                </h3>
                <p>
                  2023-07-19
                </p>
              </div>
              <div>
                <h3>
                  Vote average
                </h3>
                <p>
                  7.3
                </p>
              </div>
              <div>
                <h3>
                  Popularity
                </h3>
                <p>
                  2820.205
                </p>
              </div>
            </div>
          </section>
        </main>
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
