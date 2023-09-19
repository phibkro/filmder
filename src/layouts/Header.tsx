import { Link, Outlet } from "react-router-dom";
import { ThemeToggle } from "../features/theming/themeToggle";

export default function Header() {
  return (
    <>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </nav>

      <Outlet />
    </>
  );
}
