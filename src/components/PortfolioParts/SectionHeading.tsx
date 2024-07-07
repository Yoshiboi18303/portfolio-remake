import { JSX } from "solid-js/jsx-runtime";

export function SectionHeading(props: { children: JSX.Element }) {
  return (
    <h2 class="m-3 text-2xl font-bold text-primary-600">{props.children}</h2>
  );
}
