import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "./App.css";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">App</div>
    </Provider>
  );
};

export default App;
