import musicArtists from "./items/musicArtists";
import jobs from "./items/jobs";
import links from "./items/links";
import skills from "./items/skills";
// import musicGenres from "./items/musicGenres";

import LinksSection from "./sections/LinksSection";
import JobsSection from "./sections/JobsSection";
import SkillsSection from "./sections/SkillsSection";
import MusicArtistsSection from "./sections/MusicArtistsSection";
// import MusicGenresSection from "./sections/MusicGenresSection";
import YTPsSection from "./sections/YTPsSection";

const noItemsFallback = <p class="text-2xl text-red-600">No items... :(</p>;

export default function App() {
  return (
    <div class="mt-32 flex items-center justify-center text-center">
      <div class="flex flex-col flex-wrap items-center justify-center rounded-2xl bg-gray-700 p-4 text-white">
        <img
          src="/icon.png"
          alt="Yoshiboi18303 Icon"
          aria-label="Yoshiboi18303 Icon"
          class="m-2 h-32 w-32 rounded-3xl shadow-xl shadow-slate-500 duration-700 hover:translate-y-1 hover:shadow-2xl hover:shadow-slate-300"
        />
        <h1 class="m-2 text-3xl font-black text-primary-500">Yoshiboi18303</h1>
        <p class="mb-4 text-xl text-secondary-300">
          A{" "}
          <strong>
            <a
              href="https://typescriptlang.org"
              target="_blank"
              rel="noreferrer noopenner"
              class="text-white no-underline hover:underline"
            >
              <span class="text-typescript">Type</span>
              Script
            </a>
          </strong>{" "}
          developer that develops stuff for people and also makes{" "}
          <strong>
            <span class="text-red-600">Y</span>
            <span class="text-white">T</span>
            <span class="text-orange-950">P</span>
          </strong>{" "}
          videos.
        </p>
        <LinksSection list={links} noItemsFallback={noItemsFallback} />
        <JobsSection list={jobs} noItemsFallback={noItemsFallback} />
        <SkillsSection list={skills} noItemsFallback={noItemsFallback} />
        <MusicArtistsSection
          list={musicArtists}
          noItemsFallback={noItemsFallback}
        />
        <YTPsSection />
      </div>
    </div>
  );
}
