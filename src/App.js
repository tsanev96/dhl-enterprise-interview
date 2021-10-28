import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { Photos } from "./components/Photos";
import "./App.css";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Photos />
      </div>
    </Provider>
  );
};

export default App;
