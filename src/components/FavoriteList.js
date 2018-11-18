import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import GifItem from "./GifItem";
import { GIPHY_API_KEY, GIPHY_ROOT_URL } from "../constants";

class FavoriteList extends Component {
  constructor(props) {
    super(props);
    this.state = { gifs: [] };
  }
  componentDidMount() {
    this.getGifs();
  }

  async getGifs() {
    this.props.favorites.map(id => {
      const url = `${GIPHY_ROOT_URL}/${id}?api_key=${GIPHY_API_KEY}`;
      const request = axios.get(url).then(res => {
        this.setState({ gifs: [...this.state.gifs, res.data.data] });
      });
    });
  }

  renderGifs() {
    if (!this.props.favorites) {
      return (
        <li>
          No favorites yet. Please search for gifs to add to your favorites.
        </li>
      );
    }
    return this.state.gifs.map(gif => {
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
          <h3>Your Favorite Gifs</h3>
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
