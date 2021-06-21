import produce from 'immer';

const INICIAL_STATE = {
  list: null,
  loading: false,
  pokedex: [],
};

export default function pokemon(state = INICIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@pokemon/GET_POKEMONS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@pokemon/GET_POKEMONS_SUCCESS': {
        draft.list = action.payload.list;
        draft.loading = false;
        break;
      }
      case '@pokemon/GET_POKEMONS_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@pokemon/CLEAR_POKEMONS': {
        draft.list = null;
        draft.loading = false;
        break;
      }
      case '@pokemon/ADD_POKEMON_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@pokemon/ADD_POKEMON_SUCCESS': {
        draft.loading = false;
        draft.pokedex = action.payload.pokedex;
        break;
      }
      case '@pokemon/ADD_POKEMON_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@pokemon/CLEAR_POKEDEX': {
        draft.pokedex = [];
        break;
      }
      default:
    }
  });
}
