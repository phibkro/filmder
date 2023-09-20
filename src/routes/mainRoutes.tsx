import MovieAppLayout from "../layouts/Layout.tsx";
import ErrorPage from "../pages/error-page.tsx";
import MoviePage from "../pages/movie-page.tsx";
import Root from "../pages/root.tsx";
export const mainRoutes = [
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
        path: import.meta.env.BASE_URL + "/movies/:movieId",
        element: <MoviePage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
];
