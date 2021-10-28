import { combineReducers } from "@reduxjs/toolkit";
import { photosReducer } from "./photos";

export const entities = combineReducers({
  photos: photosReducer,
});
