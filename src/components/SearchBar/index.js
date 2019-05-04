import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchCity } from '../../actions';
import { PRIMARY_COLOR } from '../../actions/constants';

class SearchBar extends Component {
  state = {
    term: '',
  };
  handleChange = e => {
    this.setState({ term: e.target.value });
  };

  search = () => {
    const { term } = this.state;
    const { dispatch } = this.props;
    dispatch(searchCity(term));
  };
  render() {
    return (
      <div className="row">
        <div className="input-field col s8">
          <input
            id="icon_prefix"
            type="text"
            placeholder="Search for a city"
            onChange={this.handleChange}
          />
          <label htmlFor="icon_prefix" />
        </div>
        <div className="col s4">
          <button
            className="waves-effect waves-light btn"
            onClick={this.search}
            style={{ marginTop: 25, backgroundColor: PRIMARY_COLOR }}
            disabled={this.state.term.length < 1}
          >
            <i className="material-icons left">search</i>GO
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(SearchBar);
