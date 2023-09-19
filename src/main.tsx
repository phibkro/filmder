import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import "./styles/global.css";

<<<<<<< HEAD
import { mainRoutes } from "./routing/mainRoutes.tsx";
import { testRoutes } from "./testing/testRoutes.tsx";
=======
import { mainRoutes } from "./routes/mainRoutes.tsx";
import { testRoutes } from "./routes/testRoutes.tsx";
>>>>>>> main

const router = createBrowserRouter([...mainRoutes, testRoutes]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
<<<<<<< HEAD
      <RouterProvider router={router} />
=======
      <ThemeProvider defaultTheme="dark" key="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
>>>>>>> main
    </QueryClientProvider>
  </React.StrictMode>,
);
