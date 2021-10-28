import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "./App.css";
import { Albums } from "./components/Albums";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Albums />
      </div>
    </Provider>
  );
};

export default App;
