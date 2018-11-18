import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SearchPage from "./components/SearchPage";
import FavoriteList from "./components/FavoriteList";

import "bootstrap/dist/css/bootstrap.css";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/favorites" component={FavoriteList} />
            <Route path="/" component={SearchPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
