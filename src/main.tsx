import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Root from "./pages/root.tsx";
import ErrorPage from "./pages/error-page.tsx";
import MoviePage from "./pages/movie-page.tsx";
import "./styles/global.css";
import TestMoviePage from "./pages/testing/test-movie-page.tsx";

const router = createBrowserRouter([
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
  {
    path: "/test/movie-page",
    element: <TestMoviePage />,
  },
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
