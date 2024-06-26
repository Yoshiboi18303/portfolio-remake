import { MusicArtist } from "../items/musicArtists";
import { IconExternalLink } from "@tabler/icons-solidjs";

export function ArtistCard(props: MusicArtist) {
  return (
    <a
      href={props.url}
      target="_blank"
      class="flex flex-col items-center justify-center rounded-2xl bg-zinc-600 p-4 text-center text-white shadow-xl duration-700 hover:rotate-3 hover:scale-105 hover:bg-white hover:text-black hover:shadow-2xl focus:rotate-3 focus:scale-105 focus:bg-white focus:text-black focus:shadow-2xl"
      rel="noreferrer noopenner"
      style={{
        width: "200px",
      }}
    >
      <img
        src={props.avatarUrl}
        alt={`${props.name} Avatar`}
        aria-label={`${props.name} Avatar`}
        class="h-16 w-16 rounded-3xl border-2 border-black"
      />
      <span class="flex flex-row">
        <h2 class="m-1 text-lg font-medium">{props.name}</h2>
        <IconExternalLink size="24" />
      </span>
    </a>
  );
}
