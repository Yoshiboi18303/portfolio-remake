import { Show, createSignal } from "solid-js";
import { VideoObject } from "../types";

export default function YTPCard({ ytp }: { ytp: VideoObject }) {
  const [iframeLoading, setIframeLoading] = createSignal(true);

  return (
    <div class="flex-row rounded-3xl bg-zinc-500 p-4 text-center text-white shadow-md duration-700 hover:translate-y-2 hover:bg-white hover:text-black hover:shadow-xl">
      <a
        href={`https://www.youtube.com/watch?v=${ytp.videoId}`}
        target="_blank"
        rel="noreferrer noopenner"
        class="flex flex-row flex-wrap items-center justify-center gap-4"
      >
        <p class="mr-3 text-xl font-bold">{ytp.title}</p>
        <iframe
          src={`https://www.youtube.com/embed/${ytp.videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          onLoad={() => setIframeLoading(false)}
        ></iframe>
        <Show when={iframeLoading()}>
          <p>Video embed loading, please wait...</p>
        </Show>
      </a>
    </div>
  );
}
