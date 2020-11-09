export const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

export function GET_POKEMON(page) {
  return {
    url: API_URL + page,
    options: {
      method: 'GET',
    },
  };
}
