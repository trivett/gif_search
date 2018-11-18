import React, { Component } from "react";
import FaveToggle from "./FaveToggle";

export default class GifItem extends Component {
  render() {
    return (
      <div className="card gif-item">
        <img
          className="card-img-top"
          src={this.props.gif.images.original.url}
          alt="Card image cap"
        />
        <FaveToggle id={this.props.gif.id} />
      </div>
    );
  }
}
