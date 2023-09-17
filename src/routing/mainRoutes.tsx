import Root from "../pages/root.tsx";
import ErrorPage from "../pages/error-page.tsx";
import MoviePage from "../pages/movie-page.tsx";
export const mainRoutes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movies/:movieId",
    element: <MoviePage />,
    errorElement: <ErrorPage />,
  },
];
