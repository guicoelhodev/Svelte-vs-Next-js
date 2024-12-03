import { api } from "$lib/services/api";
import type { CharactereResponse } from "$lib/services/api/types/character";

export async function load(): Promise<CharactereResponse>{
  return await api.getCharacters({ newUrl: null });
}

