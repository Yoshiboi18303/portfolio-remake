import type { MusicGenre } from "../items/musicGenres";
import type { SectionProps } from "../types";

import { Index } from "solid-js";
import { SectionList } from "../components/PortfolioParts/SectionList";
import { SectionGrid } from "../components/PortfolioParts/SectionGrid";
import { SectionHeading } from "../components/PortfolioParts/SectionHeading";
import ArtistIcon from "../components/MusicArtistComps/ArtistIcon";

export default function MusicGenresSection({
  list: musicGenres,
  noItemsFallback,
}: SectionProps<MusicGenre>) {
  return (
    <div>
      <SectionHeading>Favorite Music Genres</SectionHeading>
      <SectionGrid class="grid-cols-2">
        <Index each={musicGenres} fallback={noItemsFallback}>
          {(genre) => (
            <div class="flex flex-col rounded-3xl bg-gray-500 p-4">
              <SectionList>
                <Index each={genre().artists}>
                  {(artist) => (
                    <ArtistIcon
                      avatarUrl={artist().avatarUrl}
                      name={artist().name}
                      url={artist().url}
                    />
                  )}
                </Index>
              </SectionList>
              <h2 class="mt-2 text-xl font-extrabold">{genre().name}</h2>
            </div>
          )}
        </Index>
      </SectionGrid>
    </div>
  );
}
