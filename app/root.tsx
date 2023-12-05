import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
// existing imports

import globalStylesHref from "./global.css";
import overviewStylesHref from "./overview.css";
import resetStylesHref from "./reset.css";
import stylesStylesHref from "./styles.css";
import utilitiesStylesHref from "./utilities.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStylesHref },
  { rel: "stylesheet", href: overviewStylesHref },
  { rel: "stylesheet", href: resetStylesHref },
  { rel: "stylesheet", href: stylesStylesHref },
  { rel: "stylesheet", href: utilitiesStylesHref },
];

export default function App() {
  return (
    <html>
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Hello world!</h1>
        <Outlet />

        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
