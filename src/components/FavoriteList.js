import React, { Component } from "react";
import { connect } from "react-redux";

import GifItem from "./GifItem";

class FavoriteList extends Component {
  renderGifs() {
    if (!this.props.favorites) {
      return (
        <li>
          No favorites yet. Please search for gifs to add to your favorites.
        </li>
      );
    }
    return this.props.favorites.map(gif => {
      return (
        <li key={gif.id}>
          <GifItem gif={gif} />
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div>
          <h3>Your Gif Search Results</h3>
          <ul className="list-group">{this.renderGifs()}</ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { favorites: state.gifSearch.favorites };
}

export default connect(mapStateToProps)(FavoriteList);
