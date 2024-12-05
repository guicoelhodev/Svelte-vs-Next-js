import type { APIContract } from "./types/apiContract";
import type { CharactereResponse } from "./types/character";
import type { EpisodeResponse } from "./types/episode";
import type { LocationResponse } from "./types/location";
import type { TSingleCharactere } from "./types/singleCharacter";

export class API implements APIContract {
  endpoint = "https://rickandmortyapi.com/api";
  private static instance: API | null = null;

  static getInstance() {
    if (!this.instance) {
      return (this.instance = new API());
    }
    return this.instance;
  }

  async getCharacters(newPageIndex: number) {
    const url = `${this.endpoint}/character/?page=${newPageIndex}`;

    const responseFetch = await fetch(url);
    const response = (await responseFetch.json()) as CharactereResponse;

    return response;
  }

  async getSingleCharacter(newUrlCharactere: string) {
    const responseFetch = await fetch(newUrlCharactere);
    const response = (await responseFetch.json()) as TSingleCharactere;
    return response;
  }

  async getEpisode(newUrlEpisode: string) {
    const responseFetch = await fetch(newUrlEpisode);
    const response = (await responseFetch.json()) as EpisodeResponse;
    return response;
  }

  async getLocation(urlLocation: string) {
    const responseFetch = await fetch(urlLocation);
    const response = (await responseFetch.json()) as LocationResponse;
    return response;
  }
}

export const api = API.getInstance();
