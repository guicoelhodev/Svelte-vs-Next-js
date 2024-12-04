import type { TCharactereQuery, CharactereResponse } from "./character";
import { TSingleCharactere } from "./singleCharacter";

export interface APIContract {
  getCharacters: (page: TCharactereQuery) => Promise<CharactereResponse>;
  getSingleCharacter: (characterId: string) => Promise<TSingleCharactere>;
  getEpisode: (urlEpisode: string) => Promise<EpisodeResponse>;
}
