import { Link, Outlet } from "react-router-dom";
import ThemeTest from "../test/manual_testing/theme.tsx";
import LocalStorageTest from "../test/manual_testing/local-storage.tsx";

const routes = [
  {
    path: "theme",
    element: <ThemeTest />,
  },
  {
    path: "local-storage",
    element: <LocalStorageTest />,
  },
];
export const testRoutes = {
  path: "project1/test",
  element: (
    <>
      <nav>
        {routes.map(({ path }, i) => (
          <Link to={path} key={i}>
            {path}
          </Link>
        ))}
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  ),
  children: routes,
};
