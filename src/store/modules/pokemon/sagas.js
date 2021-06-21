import { takeLatest, put, all, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { split, findIndex } from 'lodash';

import { apiFetch, pokemonsGQLQuery } from '~/services/api';

import { pokemonsSuccess, pokemonsFailure, addPokemonSuccess } from './actions';

export function* requestPokemons() {
  try {
    const response = yield apiFetch('pokemons', pokemonsGQLQuery(1118, 0));

    const list = response.data.pokemons.results;
    yield put(pokemonsSuccess(list));
  } catch (error) {
    toast.error('Something went wrong, please try again latter!');
    yield put(pokemonsFailure());
  }
}

export function* requestAddPokemon({ payload }) {
  try {
    const { info, name } = payload.pokemon;

    const mainType = split(info.formattedTypes, ',')[0];

    const pokemon = {
      id: info.id,
      name,
      mainType,
      amount: 1,
    };

    const { pokedex } = yield select(state => state.pokemon);

    const pokemonIndex = findIndex(
      pokedex,
      pokedexItem => pokedexItem.id === pokemon.id
    );
    if (pokemonIndex >= 0) {
      pokedex[pokemonIndex].amount += 1;
    } else {
      pokedex.push(pokemon);
    }

    yield put(addPokemonSuccess(pokedex));
    toast.success('Pokemon added to your pokedex!');
  } catch (error) {
    yield put(pokemonsFailure());
    toast.error('Something went wrong, please try again latter!');
  }
}

export default all([
  takeLatest('@pokemon/GET_POKEMONS_REQUEST', requestPokemons),
  takeLatest('@pokemon/ADD_POKEMON_REQUEST', requestAddPokemon),
]);
