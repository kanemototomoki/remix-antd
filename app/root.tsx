import type { LinksFunction } from "@remix-run/cloudflare";
import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "antd/dist/reset.css";
import { TasksProvider } from "./features/tasks/TasksProvider";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: "./global.css" },
];

export default function App() {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="view-transition" content="same-origin" />
        <Meta />
        <Links />
      </head>
      <body
        style={{
          background: "gainsboro",
        }}
      >
        <TasksProvider>
          <Outlet />
          <ScrollRestoration />
          <LiveReload />
          <Scripts />
        </TasksProvider>
      </body>
    </html>
  );
}
