import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h1>Hello World Form</h1>
        <form>
          <input
            type="text"
          />
        </form>
      </div>
    )
  }
}

export default SearchBar;
