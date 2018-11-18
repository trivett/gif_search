import { Actions } from "../actions/index";
import _ from "lodash";

const emptyState = {
  query: "",
  results: [],
  favorites: []
};

export default function(state = emptyState, action) {
  switch (action.type) {
    case Actions.FETCH_GIFS:
      const gifs = action.payload.data.data;

      return { ...state, results: gifs };
    case Actions.ADD_TO_FAVORITES:
      if (!state.favorites.includes(action.payload)) {
        const favorites = [...state.favorites, action.payload];

        return { ...state, favorites };
      }
      return state;
    case Actions.REMOVE_FROM_FAVORITES:
      let favorites = state.favorites;
      favorites = [...favorites.filter(f => f !== action.payload)];
      return { ...state, favorites };

    default:
      return state;
  }
}
