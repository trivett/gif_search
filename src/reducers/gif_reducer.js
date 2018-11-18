import { Actions } from "../actions/index";
import _ from "lodash";

const sideEffects = {
  readFromLocalStorage: () => {
    const storedFavoriteIds = localStorage.getItem("favoriteGifs");
    if (storedFavoriteIds) {
      return storedFavoriteIds.split(",");
    } else {
      return [];
    }
  },
  writeToLocalStorage: favorites => {
    const favoritesString = favorites.join(",");
    localStorage.setItem("favoriteGifs", favoritesString);
  }
};

const emptyState = {
  query: "",
  results: [],
  favorites: sideEffects.readFromLocalStorage()
};

export default function(state = emptyState, action) {
  switch (action.type) {
    case Actions.FETCH_GIFS:
      const gifs = action.payload.data.data;
      return { ...state, results: gifs };

    case Actions.ADD_TO_FAVORITES:
      if (!state.favorites.includes(action.payload)) {
        const favorites = [...state.favorites, action.payload];
        sideEffects.writeToLocalStorage(favorites);
        return { ...state, favorites };
      }
      return state;

    case Actions.REMOVE_FROM_FAVORITES:
      let favorites = state.favorites;
      favorites = [...favorites.filter(f => f !== action.payload)];
      sideEffects.writeToLocalStorage(favorites);
      return { ...state, favorites };

    default:
      return state;
  }
}
