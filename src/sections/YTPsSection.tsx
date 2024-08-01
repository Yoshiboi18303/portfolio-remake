import { Index, createSignal, createEffect, Show } from "solid-js";
import { SectionHeading } from "../components/PortfolioParts/SectionHeading";
import axios from "axios";
import { VideoObject } from "../types";
import YTPCard from "../components/YTPCard";

async function loadData(
  maxVideosToLoad: number,
): Promise<VideoObject[] | string> {
  // Make request to Invideous API (this is an instance of Invideous).
  const response = await axios
    .get(
      `https://iv.ggtyler.dev/api/v1/channels/UCKTAOjvi768AX-ccy1iPVKA/videos`,
    )
    .catch((err: Error) => {
      return err.message;
    });

  if (typeof response === "string") return response;

  /* Axios will reject the Promise if the status isn't an OK type status, so we don't need to check if it's OK. */

  const data = response.data as { videos: VideoObject[] };
  const responseVideos = data.videos.filter(
    (video) =>
      video.title.toLowerCase().includes("(ytp)") ||
      video.title.toLowerCase().includes("[ytp]"),
  );

  if (responseVideos.length === 0) return "No YTP videos found";

  // Returns the first `maxVideosToLoad` videos that aren't "spoilers" (aka upcoming videos).
  return responseVideos
    .filter((video) => !video.isUpcoming /* No spoilers!! */)
    .slice(0, maxVideosToLoad);
}

export default function YTPsSection() {
  const [YTPs, setYTPs] = createSignal<VideoObject[] | null>(null);
  const [isLoading, setIsLoading] = createSignal(true);
  const [error, setError] = createSignal<string | null>(null);
  const [maxVideosToLoad, setMaxVideosToLoad] = createSignal(3);
  const [noMoreVideosToLoad, setNoMoreVideosToLoad] = createSignal(false);
  let hasLoadedBefore = false;

  function stopLoading() {
    setIsLoading(false);
  }

  createEffect(async () => {
    setIsLoading(true);

    const ytps = await loadData(maxVideosToLoad());

    if (typeof ytps === "string") {
      setError(ytps);
      stopLoading();
      return;
    }

    if (ytps.length < maxVideosToLoad()) setNoMoreVideosToLoad(true);

    setYTPs(ytps);
    stopLoading();
    if (!hasLoadedBefore) hasLoadedBefore = true;
  });

  return (
    <div>
      <SectionHeading>My YTPs</SectionHeading>
      <Show when={YTPs()}>
        <div class="flex flex-col gap-4">
          <Index each={YTPs()}>{(ytp) => <YTPCard ytp={ytp()} />}</Index>
          <Show when={maxVideosToLoad() < 12 && !noMoreVideosToLoad()}>
            <button
              class="rounded-3xl bg-zinc-500 p-4 text-white shadow-md duration-700 hover:translate-y-2 hover:bg-white hover:text-black hover:shadow-xl"
              onClick={() => setMaxVideosToLoad(maxVideosToLoad() + 3)}
            >
              Load More
            </button>
          </Show>
        </div>
      </Show>
      <Show when={isLoading()}>
        <Show
          when={hasLoadedBefore}
          fallback={
            <h3 class="mt-5 font-mono text-xl">
              Loading the first 3 most recent YTPs from my{" "}
              <span class="text-red-600">You</span>
              Tube channel...
            </h3>
          }
        >
          <h3 class="mt-5 font-mono text-xl">
            Loading the next 3 most recent YTPs from my{" "}
            <span class="text-red-600">You</span>
            Tube channel...
          </h3>
        </Show>
      </Show>
      <Show when={error()}>
        <h3 class="text-xl">An error occurred.</h3>
        <code>{error()}</code>
      </Show>
    </div>
  );
}
