import { IconExternalLink } from "@tabler/icons-solidjs";
import { Skill } from "../items/skills";
import { Show } from "solid-js";

const classes =
  "rounded-3xl bg-zinc-500 p-4 text-left text-white shadow-md duration-700 hover:translate-y-2 hover:bg-white hover:text-black hover:shadow-xl";

export function SkillCard(props: Skill) {
  return (
    <Show
      when={props.url}
      fallback={
        <div class={classes}>
          {props.icon}
          <p class="text-lg font-medium">{props.name}</p>
        </div>
      }
    >
      <a
        href={props.url}
        target="_blank"
        rel="noreferrer noopenner"
        class={classes}
      >
        {props.icon}
        <span class="flex flex-row">
          <p class="m-1 text-lg font-medium">{props.name}</p>
          <IconExternalLink size="24" />
        </span>
      </a>
    </Show>
  );
}
