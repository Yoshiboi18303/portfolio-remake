import type { MusicArtist } from "./musicArtists";

export interface MusicGenre {
  name: string;
  artists: MusicArtist[];
}

export default [
  {
    name: "Electronic",
    artists: [
      {
        name: "Subtronics",
        url: "https://subtronics.net",
        avatarUrl:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCryNT6HfmgCk0Xp6abp4WBhs__U42_wAF824jiZs1ZIPf2mep",
      },
      {
        name: "SVDDEN DEATH",
        url: "https://svddendeath.com/",
        avatarUrl:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSCLp8tatB7YKjppMF4_nij8R3vw4BlmsexouHfTRBVagoBT7Pt",
      },
      {
        name: "Tobu",
        url: "https://tobu.io",
        avatarUrl:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTCY43-dS2wH4Q7iQdz_g7lu99ewlLfyRoNOD1Tlburl3VAhszt",
      },
    ],
  },
] as MusicGenre[];
