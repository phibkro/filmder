import { createBrowserRouter } from "react-router-dom";
import MovieAppLayout from "./layouts/Layout";
import ErrorPage from "./pages/error-page";
import MoviePage from "./pages/movie-page";
import Root from "./pages/root";

export const movieAppRouter = createBrowserRouter([
  {
    path: import.meta.env.BASE_URL,
    element: <MovieAppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: import.meta.env.BASE_URL,
        element: <Root />,
      },
      {
        path: "movies/:movieId",
        element: <MoviePage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
