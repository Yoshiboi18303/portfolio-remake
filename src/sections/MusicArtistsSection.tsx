import type { MusicArtist } from "../items/musicArtists";
import type { SectionProps } from "../types";

import { Index } from "solid-js";
import { SectionHeading } from "../components/PortfolioParts/SectionHeading";
import { SectionGrid } from "../components/PortfolioParts/SectionGrid";
import { ArtistCard } from "../components/ArtistCard";

export default function MusicArtistsSection({
  list: musicArtists,
  noItemsFallback,
}: SectionProps<MusicArtist>) {
  return (
    <div>
      <SectionHeading>Favorite Music Artists</SectionHeading>
      <SectionGrid class="grid-cols-4">
        <Index each={musicArtists} fallback={noItemsFallback}>
          {(artist) => <ArtistCard {...artist()} />}
        </Index>
      </SectionGrid>
    </div>
  );
}
