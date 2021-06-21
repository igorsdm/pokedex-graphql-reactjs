import { map, join, capitalize } from 'lodash';

export const formatPokemonInfo = pokemonInfo => {
  const { id, abilities, types } = pokemonInfo;

  const formattedAbilities = join(
    map(abilities, ability => capitalize(ability.ability.name)),
    ', '
  );
  const formattedTypes = join(
    map(types, type => capitalize(type.type.name)),
    ', '
  );

  const formattedInfo = {
    id,
    formattedAbilities,
    formattedTypes,
  };

  return formattedInfo;
};
