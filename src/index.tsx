/* @refresh reload */
import { render } from "solid-js/web";
import { injectSpeedInsights } from "@vercel/speed-insights";
import App from "./App";
import Footer from "./Footer";

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
      <Footer />
    </>
  ),
  root,
);
