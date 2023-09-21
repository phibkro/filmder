import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "../features/theming/themeToggle";

export default function Header() {
  return (
    <header>
      <nav>
        <li>
          <Link to={import.meta.env.BASE_URL}>
            <Home size={"100%"} />
          </Link>
        </li>
        <h1>Filmder</h1>
        <li>
          <ThemeToggle iconSize="100%" />
        </li>
      </nav>
    </header>
  );
}
