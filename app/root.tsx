import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "lucide-react";
import { useState } from "react";
import clapperboard from "./clapperboard.svg";
import ThemeToggleButton from "./components/ThemeToggleButton";
import globalStylesHref from "./global.css";
import overviewStylesHref from "./overview.css";
import resetStylesHref from "./reset.css";
import stylesStylesHref from "./styles.css";
import utilitiesStylesHref from "./utilities.css";

export const links: LinksFunction = () => [
  { rel: "icon", href: clapperboard, type: "image/svg" },
  { rel: "stylesheet", href: resetStylesHref },
  { rel: "stylesheet", href: utilitiesStylesHref },
  { rel: "stylesheet", href: globalStylesHref },
  { rel: "stylesheet", href: stylesStylesHref },
  { rel: "stylesheet", href: overviewStylesHref },
];

export default function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <html>
        <head>
          <Meta />
          <Links />
          <title>Filmder</title>
        </head>
        <body>
          <header>
            <nav>
              <li>
                <Link to={"/"}>
                  <Home size={"100%"} />
                </Link>
              </li>
              <h1>Filmder</h1>
              <li>
                <ThemeToggleButton iconSize="100%" />
              </li>
            </nav>
          </header>
          <Outlet />

          <Scripts />
          <LiveReload />
        </body>
      </html>
    </QueryClientProvider>
  );
}
