import React from "react";
import { Provider } from "react-redux";
import { Albums } from "./components/Albums";
import configureStore from "./store/configureStore";

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
