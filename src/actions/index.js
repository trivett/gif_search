import axios from "axios";
import GIPHY_API_KEY from "../keys";

const GIPHY_ROOT_URL = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}`;

export const Actions = {
  FETCH_GIFS: "FETCH_GIFS"
};

export function fetchGifs(query) {
  const search = `${GIPHY_ROOT_URL}&q=${query}`;
  const request = axios.get(search);
  return {
    type: Actions.FETCH_GIFS,
    payload: request
  };
}
