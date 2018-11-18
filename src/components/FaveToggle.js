import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToFavorites, removeFromFavorites } from "../actions";

class FaveToggle extends Component {
  remove() {
    this.props.removeFromFavorites(this.props.id);
  }
  add() {
    // debugger;
    this.props.addToFavorites(this.props.id);
  }
  textAndButtons() {
    if (this.props.favorites.includes(this.props.id)) {
      return (
        <div>
          <p>{this.props.favorites}</p>
          <p className="card-text">Remove from favorites?</p>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.remove()}
          >
            Remove
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <p>{this.props.favorites}</p>
          <p className="card-text">Add to favorites?</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.add()}
          >
            Add
          </button>
        </div>
      );
    }
  }
  render() {
    return <div className="card-body">{this.textAndButtons()}</div>;
  }
}

function mapStateToProps(state) {
  // console.log(state);
  return { favorites: state.gifSearch.favorites };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToFavorites, removeFromFavorites }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FaveToggle);
