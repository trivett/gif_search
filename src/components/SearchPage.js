import React, { Component } from "react";

import SearchBar from "./SearchBar";
import GifList from "./GifList";

export default class SearchPage extends Component {
  render() {
    return (
      <div className="SearchPage">
        <SearchBar />
        <GifList />
      </div>
    );
  }
}
