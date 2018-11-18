import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export default class FaveToggle extends Component {
  render() {
    return (
      <div className="card-body">
        <p className="card-text">Add to favorites?</p>
      </div>
    );
  }
}
