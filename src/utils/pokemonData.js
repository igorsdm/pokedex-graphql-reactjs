import { map, findIndex } from 'lodash';

export const getPokemonsData = pokedex => {
  const data = [['Type', 'Number Of Pokemons']];

  map(pokedex, pokemon => {
    const pokemonIndex = findIndex(
      data,
      pokemonTypes => pokemonTypes[0] === pokemon.mainType
    );

    if (pokemonIndex >= 0) {
      data[pokemonIndex][1] += 1;
    } else {
      data.push([pokemon.mainType, 1]);
    }
  });

  return data;
};
