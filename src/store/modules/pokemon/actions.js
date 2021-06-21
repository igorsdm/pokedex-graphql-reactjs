export function pokemonsRequest() {
  return {
    type: '@pokemon/GET_POKEMONS_REQUEST',
  };
}

export function pokemonsSuccess(list) {
  return {
    type: '@pokemon/GET_POKEMONS_SUCCESS',
    payload: { list },
  };
}

export function pokemonsFailure() {
  return {
    type: '@pokemon/GET_POKEMONS_FAILURE',
  };
}

export function clearPokemons() {
  return {
    type: '@pokemon/CLEAR_POKEMONS',
  };
}

export function addPokemonRequest(pokemon) {
  return {
    type: '@pokemon/ADD_POKEMON_REQUEST',
    payload: { pokemon },
  };
}
export function addPokemonSuccess(pokedex) {
  return {
    type: '@pokemon/ADD_POKEMON_SUCCESS',
    payload: { pokedex },
  };
}
export function addPokemonFailure() {
  return {
    type: '@pokemon/ADD_POKEMON_FAILURE',
  };
}

export function clearPokedex() {
  return {
    type: '@pokemon/CLEAR_POKEDEX',
  };
}
