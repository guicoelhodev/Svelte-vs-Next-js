import { api } from "$lib/services/api";

export async function load() {
  const response = api.getCharacters(1);
  return {
    response,
  };
}
