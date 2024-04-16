import { JSX } from "solid-js/jsx-runtime";

export function SectionList(props: { children: JSX.Element }) {
  return (
    <div class="m-3 flex flex-row flex-wrap items-center justify-center gap-4">
      {props.children}
    </div>
  );
}
