
import type { APIContract } from "./types/apiContract";
import type { TCharactereQuery, CharactereResponse } from "./types/character";

export class API implements APIContract {

  private endpoint =  'https://rickandmortyapi.com/api';
  private static instance: API | null = null;

  static getInstance(){
    if(!this.instance){
      return this.instance = new API();
    }
      return this.instance
  };

  async getCharacters(args: TCharactereQuery){

    let url = args.newUrl ?? `${this.endpoint}/character/?page=1`;

    const responseFetch = await fetch(url)
    const response = await responseFetch.json() as CharactereResponse;

    return response;
  }
};

export const api = API.getInstance()

