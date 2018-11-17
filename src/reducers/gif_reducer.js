import { Actions } from "../actions/index";
import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
    case Actions.FETCH_GIFS:
      const gifs = action.payload.data.data;
      const results = _.mapKeys(gifs, "id");
      console.log(results);
      return { ...state, results };

    default:
      return state;
  }
  return state;
}
