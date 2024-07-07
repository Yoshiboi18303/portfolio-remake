import { MusicArtist } from "../../items/musicArtists";
import { IconExternalLink } from "@tabler/icons-solidjs";
import ArtistIcon from "./ArtistIcon";

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
      <ArtistIcon avatarUrl={props.avatarUrl} name={props.name} />
      <span class="flex flex-row">
        <h2 class="mr-1 text-lg font-medium">{props.name}</h2>
        <IconExternalLink size="24" />
      </span>
    </a>
  );
}
