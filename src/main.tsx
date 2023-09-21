import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./features/theming/themeProvider.tsx";
import { movieAppRouter } from "./router.tsx";
import "./styles/global.css";
import "./styles/reset.css";
import "./styles/styles.css";
import "./styles/variables.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" key="vite-ui-theme">
        <RouterProvider router={movieAppRouter} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
