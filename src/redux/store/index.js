import albumReducer from "../reducers/albumReducer";
import artistReducer from "../reducers/artistReducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const bigReducer = combineReducers({
  albums: albumReducer,
  artist: artistReducer
});

const store = configureStore({
  reducer: bigReducer,
});

export default store