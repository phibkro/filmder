import ThemeTest from "./pages/theme.tsx";
import FrontpageTest from "./pages/frontpage.tsx";
import LocalStorageTest from "./pages/local-storage.tsx";

export const testRoutes = {
  path: "/test",
  children: [
    {
      path: "theme",
      element: <ThemeTest />,
    },
    {
      path: "movie-page",
      element: <FrontpageTest />,
    },
    {
      path: "local-storage",
      element: <LocalStorageTest />,
    },
  ],
};
