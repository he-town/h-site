import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <Router
      root={(props) => (
        <Suspense>
          <div class="h-screen flex flex-col mx-24 pb-12">
            <Header />
            {props.children}
          </div>
        </Suspense>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
