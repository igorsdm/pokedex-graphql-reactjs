import produce from 'immer';

const INICIAL_STATE = {
  theme: 'Grass',
};

export default function auth(state = INICIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/CHANGE_THEME': {
        draft.theme = action.payload.theme;
        break;
      }
      default:
    }
  });
}
