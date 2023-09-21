import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import ErrorPage from "./pages/error-page";
import MainPage from "./pages/main-page";
import MoviePage from "./pages/movie-page";

const rootPath = import.meta.env.BASE_URL;
export const appRouter = createBrowserRouter([
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
]);
