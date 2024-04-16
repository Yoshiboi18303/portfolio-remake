import { Link } from "../items/links";

export function LinkIcon(props: Link) {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noreferrer noopenner"
      class="rounded-3xl bg-gradient-to-br from-zinc-600 to-zinc-300 p-4 text-white shadow-lg duration-1000 ease-out hover:translate-y-1 hover:scale-110 hover:bg-white hover:bg-none hover:text-black hover:shadow-xl focus:translate-y-1 focus:scale-110 focus:bg-white focus:bg-none focus:text-black focus:shadow-xl"
    >
      {props.icon}
    </a>
  );
}
