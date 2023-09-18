import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { ThemeProvider } from "./features/theming/themeProvider.tsx";
import "./styles/global.css";
import Navbar from "./components/navbar.tsx";


import { mainRoutes } from "./routing/mainRoutes.tsx";
import { testRoutes } from "./testing/testRoutes.tsx";

const router = createBrowserRouter([...mainRoutes, testRoutes]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Navbar></Navbar>
    </QueryClientProvider>
  </React.StrictMode>
);
