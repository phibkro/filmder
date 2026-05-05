import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import ErrorPage from "./pages/error-page";
import MainPage from "./pages/main-page";
import MoviePage from "./pages/movie-page";

const rootPath = "/";
// Vite injects the configured `base` (vite.config.ts) as
// import.meta.env.BASE_URL with trailing slash. React Router's
// basename wants no trailing slash. Default `/` keeps `bun run dev`
// unchanged when no BASE_URL is set; deployed at /filmder/ this
// resolves to "/filmder".
const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

export const appRouter = createBrowserRouter(
  [
    {
      path: rootPath,
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: rootPath,
          element: <MainPage />,
        },
        {
          path: "movies/:movieId",
          element: <MoviePage />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ],
  { basename },
);
