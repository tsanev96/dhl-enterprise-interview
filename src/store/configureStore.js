import { configureStore } from "@reduxjs/toolkit"; // allowing async actions
import reducer from "./reducer";

export default () =>
  configureStore({
    reducer,
  });
