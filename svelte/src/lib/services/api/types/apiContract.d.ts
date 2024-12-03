import type { TCharactereQuery, CharactereResponse } from "./character";

export interface APIContract {
  getCharacters: (page: TCharactereQuery) => Promise<CharactereResponse>;
}
