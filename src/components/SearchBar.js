import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";

import { fetchGifs } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { query: "", favorites: [], results: [] };
    this.onInputChange = this.onInputChange.bind(this);
    this.debouncedCall = _.debounce(this.updateQuery, 500);
  }

  onInputChange(event) {
    event.persist();
    this.debouncedCall(event.target.value);
  }

  updateQuery(query) {
    this.setState({ query });
    this.props.fetchGifs(this.state.query);
  }

  render() {
    return (
      <div className="search-bar">
        <form className="input-group">
          <input
            placeholder="Enter your search terms"
            className="form-control"
            onChange={this.onInputChange.bind(this)}
          />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchGifs }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
