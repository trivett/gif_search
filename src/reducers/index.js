import { combineReducers } from "redux";

import GifSearchReducer from "./gif_reducer";

const rootReducer = combineReducers({
  gifSearch: GifSearchReducer
});

export default rootReducer;
