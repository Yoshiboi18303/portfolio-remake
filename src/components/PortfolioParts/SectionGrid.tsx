import { JSX } from "solid-js/jsx-runtime";

interface SectionGridProps {
  children: JSX.Element;
  class: string;
}

export function SectionGrid(props: SectionGridProps) {
  return <div class={`m-3 grid gap-4 ${props.class}`}>{props.children}</div>;
}
