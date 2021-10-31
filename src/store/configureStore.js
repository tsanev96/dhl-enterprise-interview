import reducer from "./reducer";
import { api } from "./middleware/api";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default () => {
  const store = createStore(
    persistedReducer,
    applyMiddleware(thunk.withExtraArgument(api))
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
