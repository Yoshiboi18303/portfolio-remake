import { Show } from "solid-js";

function MainIcon({ avatarUrl, name }: { avatarUrl: string; name: string }) {
  return (
    <img
      src={avatarUrl}
      alt={`${name} Avatar`}
      aria-label={`${name} Avatar`}
      class="h-16 w-16 rounded-3xl border-2 border-black"
    />
  );
}

export default function ArtistIcon({
  avatarUrl,
  name,
  url = null,
}: {
  avatarUrl: string;
  name: string;
  url?: string | null;
}) {
  return (
    <Show when={url !== null} fallback={<MainIcon {...{ avatarUrl, name }} />}>
      <a href={url!} target="_blank" rel="noreferrer noopenner">
        <MainIcon {...{ avatarUrl, name }} />
      </a>
    </Show>
  );
}
