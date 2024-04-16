import { Index, createSignal, createEffect, Show } from "solid-js";
import { SectionHeading } from "../components/PortfolioParts/SectionHeading";
import axios from "axios";
import { VideoObject } from "../types";
import YTPCard from "../components/YTPCard";

export default function YTPsSection() {
  const [YTPs, setYTPs] = createSignal<VideoObject[] | null>(null);
  const [isLoading, setIsLoading] = createSignal(true);
  const [error, setError] = createSignal<string | null>(null);

  createEffect(async () => {
    function stopLoading() {
      setIsLoading(false);
    }

    // Make request to Invideous API (this is an instance of Invideous).
    const response = await axios
      .get(
        `https://iv.ggtyler.dev/api/v1/channels/UCKTAOjvi768AX-ccy1iPVKA/videos`,
      )
      .catch((err: Error) => {
        setError(err.message);
        stopLoading();
        return null;
      });

    if (!response) return;

    /* Axios will reject the Promise if the status isn't an OK type status, so we don't need to check if it's OK. */

    // Get the most recent 3 YTPs
    const ytps: VideoObject[] = [];
    const data = response.data as { videos: VideoObject[] };
    const responseVideos = data.videos.filter((video) =>
      video.title.includes("YTP"),
    );
    let runs = 0;

    if (responseVideos.length <= 0) {
      setError("No YTP videos found");
      stopLoading();
      return;
    }

    while (runs < 3) {
      const video = responseVideos[runs];
      ytps.push(video);
      runs++;
    }

    if (ytps.length <= 0) {
      setError("No YTP videos in array");
      stopLoading();
      return;
    }

    setYTPs(ytps);
    stopLoading();
  });

  return (
    <div>
      <SectionHeading>My YTPs</SectionHeading>
      <Show when={YTPs()}>
        <div class="flex flex-col gap-4">
          <Index each={YTPs()}>{(ytp) => <YTPCard ytp={ytp()} />}</Index>
        </div>
      </Show>
      <Show when={isLoading()}>
        <h3 class="font-mono text-xl">
          Loading the 3 most recent YTPs from my{" "}
          <span class="text-red-600">You</span>
          Tube channel...
        </h3>
      </Show>
      <Show when={error()}>
        <h3 class="text-xl">An error occurred.</h3>
        <code>{error()}</code>
      </Show>
    </div>
  );
}
