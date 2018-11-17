import React, { Component } from "react";

import SearchBar from "./components/SearchBar";
import GifList from "./components/GifList";
import "bootstrap/dist/css/bootstrap.css";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <GifList />
      </div>
    );
  }
}

export default App;
