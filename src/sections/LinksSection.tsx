import type { Link } from "../items/links";
import type { SectionProps } from "../types";

import { Index } from "solid-js";
import { LinkIcon } from "../components/LinkIcon";
import { SectionList } from "../components/PortfolioParts/SectionList";

export default function LinksSection({
  list: links,
  noItemsFallback,
}: SectionProps<Link>) {
  return (
    <div>
      <SectionList>
        <Index each={links} fallback={noItemsFallback}>
          {(link) => <LinkIcon {...link()} />}
        </Index>
      </SectionList>
    </div>
  );
}
