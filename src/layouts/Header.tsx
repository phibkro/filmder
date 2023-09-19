import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/"></Link>
          </li>

        </ul>
      </nav>

      <Outlet />
    </>
  );
}
