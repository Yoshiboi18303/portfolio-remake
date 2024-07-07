export interface Job {
  icon: string;
  name: string;
  link?: string | undefined;
}

export default [
  {
    name: "Pascal",
    icon: "/jobs/pascal.png",
    link: "https://github.com/Postr-Inc",
  },
  {
    name: "Caniventure Development",
    icon: "/jobs/caniventure.png",
    link: "https://github.com/Caniventure-Development",
  },
  {
    name: "Radarcord",
    icon: "/jobs/radarcord.png",
    link: "https://github.com/radarcord-net",
  },
] as Job[];
