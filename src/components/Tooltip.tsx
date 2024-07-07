import type { JSX } from "solid-js";
import { createSignal, Show } from "solid-js";

interface TooltipProps {
  children: JSX.Element;
  text: string;
}

export function Tooltip(props: TooltipProps) {
  const [isVisible, setIsVisible] = createSignal(false);

  return (
    <div class="relative inline-block">
      <span
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {props.children}
      </span>
      <Show when={isVisible()}>
        <div class="absolute z-10 rounded bg-black px-2 py-1 text-white shadow">
          {props.text}
        </div>
      </Show>
    </div>
  );
}
