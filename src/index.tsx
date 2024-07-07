/* @refresh reload */
import { render } from "solid-js/web";
import { injectSpeedInsights } from "@vercel/speed-insights";
import App from "./App";

const id = "app";
const root = document.getElementById(id);

if (!root)
  throw new Error(
    `Could not find root element, make sure an element with an ID of ${id} exists on the DOM.`,
  );

injectSpeedInsights();
render(
  () => (
    <>
      <App />
      <footer class="mt-5 flex flex-col items-center justify-center rounded-t-2xl bg-gray-800 p-5">
        <p class="mt-2">
          Icons provided by{" "}
          <a
            href="https://tabler.io/icons"
            target="_blank"
            rel="noreferrer noopenner"
            class="text-blue-500 no-underline hover:underline"
          >
            Tabler
          </a>
        </p>
        <p class="mt-2 text-xl">
          © {new Date().getFullYear()} Yoshiboi18303. All rights reserved.
        </p>
      </footer>
    </>
  ),
  root,
);
