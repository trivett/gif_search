import React, { Component } from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import GifList from "./GifList";
import Nav from "./Nav";

export default class SearchPage extends Component {
  render() {
    return (
      <div className="SearchPage container">
        <Nav />
        <SearchBar />
        <GifList />
      </div>
    );
  }
}
