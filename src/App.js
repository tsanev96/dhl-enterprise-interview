import React from "react";
import { Provider } from "react-redux";
import { Albums } from "./components/Albums";
import configureStore from "./store/configureStore";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { AlbumPhotos } from "./components/AlbumPhotos";

const store = configureStore();

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route path="/albums/:id" component={AlbumPhotos} />
            <Route path="/albums" component={Albums} />
            <Route path="/" exact component={Albums} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
