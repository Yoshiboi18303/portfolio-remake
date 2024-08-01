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
        name: "Deathpact",
        url: "https://death-pact.com",
        avatarUrl:
          "https://viberatecdn.blob.core.windows.net/entity/artist/deathpact-rsuZx",
      },
      {
        name: "Alan Walker",
        url: "https://www.alanwalker.com",
        avatarUrl:
          "https://upload.wikimedia.org/wikipedia/commons/b/bc/Alan_Walker_%28cropped%29.jpg",
      },
    ],
  },
  {
    name: "Rock",
    artists: [
      {
        name: "Sullivan King",
        url: "https://www.sullivankingmusic.com/",
        avatarUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx37ka9dL0h5S5_miLssXRNJv_e5iz4uxn7w&s",
      },
      {
        name: "Disturbed",
        url: "https://open.spotify.com/artist/3TOqt5oJwL9BE2NG9MEwDa",
        avatarUrl:
          "https://i.scdn.co/image/ab6761610000e5eb012addc95f5b2e7283f45446",
      },
      {
        name: "System Of A Down",
        url: "https://open.spotify.com/artist/5eAWCfyUhZtHHtBdNk56l1",
        avatarUrl:
          "https://i.scdn.co/image/ab6761610000e5eb60063d3451ade8f9fab397c2",
      },
    ],
  },
] as MusicGenre[];
