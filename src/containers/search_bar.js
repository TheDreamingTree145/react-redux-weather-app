import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCity } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  handleOnChange = (event) => {
    this.setState({
      term: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault;
    this.props.fetchCity(this.state.term)
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.state.term}
            onChange={this.handleOnChange}
           />
          <button>Get City Data</button>
        </form>
      </div>
    )
  }
}

export default connect(null, {fetchCity: fetchCity})(SearchBar);
