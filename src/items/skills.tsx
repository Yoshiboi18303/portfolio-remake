import {
  IconBrandSolidjs,
  IconBrandTypescript,
  IconBrandMongodb,
  IconBrandVscode,
} from "@tabler/icons-solidjs";
import type { JSX } from "solid-js/jsx-runtime";

export interface Skill {
  icon: JSX.Element;
  name: string;
  url?: string;
}

export default [
  {
    icon: <IconBrandTypescript />,
    name: "TypeScript",
    url: "https://www.typescriptlang.org",
  },
  {
    icon: <IconBrandSolidjs />,
    name: "Solid.js",
    url: "https://www.solidjs.com",
  },
  {
    icon: <IconBrandMongodb />,
    name: "MongoDB",
    url: "https://mongodb.com",
  },
  {
    icon: <IconBrandVscode />,
    name: "Visual Studio Code",
    url: "https://code.visualstudio.com",
  },
] as Skill[];
