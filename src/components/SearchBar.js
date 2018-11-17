import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AppBar from "@material-ui/core/AppBar";
import InputBase from "@material-ui/core/Input";
import SearchIcon from "@material-ui/icons/Search";
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
    const classes = this.props;
    return (
      <div className="search-bar">
        <AppBar position="static">
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              onChange={this.onInputChange.bind(this)}
            />
          </div>
        </AppBar>
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
