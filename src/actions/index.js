import axios from "axios";
import GIPHY_API_KEY from "../keys";

const GIPHY_ROOT_URL = `https://api.giphy.com/v1/gifs`;

export const Actions = {
  FETCH_GIFS: "FETCH_GIFS",
  FETCH_GIF_BY_ID: "FETCH_GIF_BY_ID",
  ADD_TO_FAVORITES: "ADD_TO_FAVORITES",
  REMOVE_FROM_FAVORITES: "REMOVE_FROM_FAVORITES"
};

export function fetchGifs(query) {
  const search = `${GIPHY_ROOT_URL}/search?api_key=${GIPHY_API_KEY}&q=${query}`;
  const request = axios.get(search);
  return {
    type: Actions.FETCH_GIFS,
    payload: request
  };
}

export function fetchGifById(id) {
  const searchById = `${GIPHY_ROOT_URL}/${id}?api_key=${GIPHY_API_KEY}`;
  const request = axios.get(searchById);
  return {
    type: Actions.FETCH_GIF_BY_ID,
    payload: request
  };
}

export function addToFavorites(id) {
  return {
    type: Actions.ADD_TO_FAVORITES,
    payload: id
  };
}

export function removeFromFavorites(id) {
  return {
    type: Actions.REMOVE_FROM_FAVORITES,
    payload: id
  };
}
