import type { APIContract } from "./types/apiContract";
import type { TCharactereQuery, CharactereResponse } from "./types/character";

export class API implements APIContract {
  private endpoint = "https://rickandmortyapi.com/api";
  private static instance: API | null = null;

  static getInstance() {
    if (!this.instance) {
      return (this.instance = new API());
    }
    return this.instance;
  }

  async getCharacters(args: TCharactereQuery) {
    const url = `${this.endpoint}/character/?page=${args.newPageIndex}`;

    const responseFetch = await fetch(url);
    const response = (await responseFetch.json()) as CharactereResponse;

    return response;
  }
}

export const api = API.getInstance();
