import type { JSX } from "solid-js/jsx-runtime";
import {
  IconBrandGithub,
  IconBrandDiscord,
  IconBrandSteam,
  IconBrandTwitch,
  IconBrandYoutube,
} from "@tabler/icons-solidjs";

export interface Link {
  icon: JSX.Element;
  url: string;
}

export default [
  {
    icon: <IconBrandGithub />,
    url: "https://github.com/Yoshiboi18303",
  },
  {
    icon: <IconBrandDiscord />,
    url: "https://discord.gg/53DZc5SWue",
  },
  {
    icon: <IconBrandTwitch />,
    url: "https://twitch.tv/yoshiboi18303",
  },
  {
    icon: <IconBrandSteam />,
    url: "https://steamcommunity.com/id/yoshiboi18303/",
  },
  {
    icon: <IconBrandYoutube />,
    url: "https://www.youtube.com/channel/UCKTAOjvi768AX-ccy1iPVKA",
  },
] as Link[];
