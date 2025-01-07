import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import Newsfeed from "./components/Newsfeed/Newsfeed";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <Newsfeed />
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
