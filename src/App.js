import React from "react";
import { Provider } from "react-redux";
import { Albums } from "./components/Albums";
import configureStore from "./store/configureStore";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { AlbumPhotos } from "./components/AlbumPhotos";
import { Header } from "./components/Header";
import { FavouritePhotos } from "./components/FavouritePhotos";

const store = configureStore();

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/albums/:id" component={AlbumPhotos} />
            <Route path="/albums" component={Albums} />
            <Route path="/favourites" component={FavouritePhotos} />
            <Route path="/" exact component={Albums} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
