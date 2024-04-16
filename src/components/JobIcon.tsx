import type { Job } from "../items/jobs";
import { Tooltip } from "./Tooltip";
import { Show } from "solid-js";

interface JobIconProps extends Job {
  invertRotation?: boolean;
}

function Icon(props: JobIconProps) {
  return (
    <Tooltip text={props.name}>
      <img
        src={props.icon}
        alt={`${props.name} Icon`}
        class="h-12 w-12 rounded-2xl border-2 border-black"
      />
    </Tooltip>
  );
}

export function JobIcon(props: JobIconProps) {
  return (
    <div
      class={`duration-500 hover:translate-y-1 ${props.invertRotation ? "hover:-rotate-3" : "hover:rotate-3"} hover:scale-110`}
    >
      <Show when={props.link} fallback={<Icon {...props} />}>
        <a href={props.link} target="_blank" rel="noreferrer noopenner">
          <Icon {...props} />
        </a>
      </Show>
    </div>
  );
}
