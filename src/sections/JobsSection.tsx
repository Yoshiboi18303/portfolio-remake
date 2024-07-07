import type { Job } from "../items/jobs";
import type { SectionProps } from "../types";

import { Index } from "solid-js";
import { JobIcon } from "../components/JobIcon";
import { SectionHeading } from "../components/PortfolioParts/SectionHeading";
import { SectionList } from "../components/PortfolioParts/SectionList";

export default function JobsSection({
  list: jobs,
  noItemsFallback,
}: SectionProps<Job>) {
  return (
    <div>
      <SectionHeading>Helping At</SectionHeading>
      <SectionList>
        <Index each={jobs} fallback={noItemsFallback}>
          {(job, index) => (
            <JobIcon {...job()} invertRotation={index % 2 != 0} />
          )}
        </Index>
      </SectionList>
    </div>
  );
}
