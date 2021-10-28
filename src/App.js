import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { Albums } from "./components/Albums/Albums";

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
