import Root from "../pages/root.tsx";
import ErrorPage from "../pages/error-page.tsx";
import MoviePage from "../pages/movie-page.tsx";
export const mainRoutes = [
  {
    path: import.meta.env.BASE_URL,
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: import.meta.env.BASE_URL + "/movies/:movieId",
    element: <MoviePage />,
    errorElement: <ErrorPage />,
  },
];
