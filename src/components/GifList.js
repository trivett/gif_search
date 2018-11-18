import React, { Component } from "react";
import { connect } from "react-redux";

import GifItem from "./GifItem";

class GifList extends Component {
  renderGifs() {
    if (!this.props.results) {
      return <li>No results yet. Please Enter your search terms</li>;
    }
    return this.props.results.map(gif => {
      return (
        <li className="gif-card" key={gif.id}>
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
          <ul className="list-group gif-list">{this.renderGifs()}</ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { results: state.gifSearch.results };
}

export default connect(mapStateToProps)(GifList);
