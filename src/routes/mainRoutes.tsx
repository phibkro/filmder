import Root from "../pages/root.tsx";
import ErrorPage from "../pages/error-page.tsx";
import MoviePage from "../pages/movie-page.tsx";
export const mainRoutes = [
  {
    path: "project1",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "project1/movies/:movieId",
    element: <MoviePage />,
    errorElement: <ErrorPage />,
  },
];
