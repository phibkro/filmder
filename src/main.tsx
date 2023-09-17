import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Root from "./pages/root.tsx";
import ErrorPage from "./pages/error-page.tsx";
import MoviePage from "./pages/movie-page.tsx";
import "./styles/global.css";
import { ThemeProvider } from "./features/theming/themeProvider.tsx";
import ThemeTesting from "./pages/testing/theme.tsx";
import TestMoviePage from "./pages/testing/test-movie-page.tsx";
import TESTLocalStoragePage from "./pages/testing/local-storage.tsx";

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
    path: "/test",
    children: [
      {
        path: "theme",
        element: <ThemeTesting />
      },
      {
        path: "movie-page",
        element: <TestMoviePage />,
      },
      {
        path: "local-storage",
        element: <TESTLocalStoragePage />,
      },
    ],
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
