import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchGifs } from "../actions/index";

import { GifItem } from "./GifItem";

class GifList extends Component {
  componentDidMount() {
    this.props.fetchGifs();
  }

  renderGifs() {
    // return <li>hi</li>;
    if (!this.props.results) {
      return <li>noe</li>;
    }
    return this.props.results.map(gif => {
      return (
        <li>
          <img src={gif.images.original.url} />
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
  return { results: state.gifSearch.results };
}

export default connect(
  mapStateToProps,
  { fetchGifs }
)(GifList);
