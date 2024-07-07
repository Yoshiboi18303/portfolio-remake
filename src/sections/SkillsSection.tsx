import type { Skill } from "../items/skills";
import type { SectionProps } from "../types";

import { Index } from "solid-js";
import { SectionHeading } from "../components/PortfolioParts/SectionHeading";
import { SectionGrid } from "../components/PortfolioParts/SectionGrid";
import { SkillCard } from "../components/SkillCard";

export default function SkillsSection({
  list: skills,
  noItemsFallback,
}: SectionProps<Skill>) {
  return (
    <div>
      <SectionHeading>Skills</SectionHeading>
      <SectionGrid class="grid-cols-4">
        <Index each={skills} fallback={noItemsFallback}>
          {(skill) => <SkillCard {...skill()} />}
        </Index>
      </SectionGrid>
    </div>
  );
}
