import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import debounce from "lodash/debounce";

import { fetchGifs } from "../actions";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.debouncedCall = debounce(this.updateQuery, 500);
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
        <form className="input-group" onSubmit={e => e.preventDefault()}>
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
