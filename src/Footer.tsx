export default function Footer() {
  return (
    <footer class="mt-5 flex flex-col items-center justify-center rounded-t-2xl bg-gray-800 p-5">
      <p class="mt-2">
        Icons provided by{" "}
        <a
          href="https://tabler.io/icons"
          target="_blank"
          rel="noreferrer noopenner"
          class="text-blue-500 no-underline hover:underline"
        >
          Tabler
        </a>
      </p>
      <p class="mt-2 text-xl">
        © {new Date().getFullYear()} Yoshiboi18303.{" "}
        <strong>Licensed under GNU General Public License v3.0</strong>.
      </p>
      <br />
      <p class="mt-2 text-sm">
        Some images were provided by external sources, such as{" "}
        <a
          href="https://en.wikipedia.org"
          target="_blank"
          class="text-cyan-400"
        >
          Wikipedia
        </a>
        ,{" "}
        <a href="https://google.com" target="_blank" class="text-cyan-400">
          Google
        </a>
        , among others. <strong>No copyright infringement intended</strong>.
      </p>
    </footer>
  );
}
