export default function ArtistIcon({ avatarUrl, name }: { avatarUrl: string; name: string }) {
  return (
    <img
      src={avatarUrl}
      alt={`${name} Avatar`}
      aria-label={`${name} Avatar`}
      class="h-16 w-16 rounded-3xl border-2 border-black"
    />
  );
}
