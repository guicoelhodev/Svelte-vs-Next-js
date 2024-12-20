import type { CharactereResponse } from "./character";
import type { LocationResponse } from "./location";
import { TSingleCharactere } from "./singleCharacter";

export interface APIContract {
  getCharacters: (page: number) => Promise<CharactereResponse>;
  getSingleCharacter: (characterId: string) => Promise<TSingleCharactere>;
  getEpisode: (urlEpisode: string) => Promise<EpisodeResponse>;
  getLocation: (urlLocation: string) => Promise<LocationResponse>;
}
