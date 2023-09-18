import { Link, Outlet } from "react-router-dom";
import ThemeTest from "./pages/theme.tsx";
import FrontpageTest from "./pages/frontpage.tsx";
import LocalStorageTest from "./pages/local-storage.tsx";

const routes = [
  {
    path: "theme",
    element: <ThemeTest />,
  },
  {
    path: "frontpage",
    element: <FrontpageTest />,
  },
  {
    path: "local-storage",
    element: <LocalStorageTest />,
  },
];
export const testRoutes = {
  path: "/test",
  element: (
    <>
      <nav>
        {routes.map(({ path }) => (
          <Link to={path}>{path}</Link>
        ))}
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  ),
  children: routes,
};
