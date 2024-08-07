import type { JSX } from "solid-js";

export interface SectionProps<T> {
  list: T[];
  noItemsFallback: JSX.Element;
}

export interface ThumbnailObject {
  quality: string;
  url: string;
  width: number; // Integer
  height: number; // Integer
}

export interface VideoObject {
  type: "video"; // Constant

  title: string;
  videoId: string;

  author: string;
  authorId: string;
  authorUrl: string;
  authorVerified: boolean;

  videoThumbnails: ThumbnailObject[];

  description: string;
  descriptionHtml: string;

  viewCount: number; // Integer
  viewCountText: string;
  lengthSeconds: number; // Integer

  published: number; // Unix timestamp
  publishedText: string;

  // Only available on premiered videos
  premiereTimestamp: number; // Unix timestamp

  liveNow: boolean;
  premium: boolean;
  isUpcoming: boolean;
}
