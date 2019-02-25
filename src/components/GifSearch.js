import React, { Component } from "react";

class GifSearch extends Component {
  state = {
    query: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchGIFS(this.state.query);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="search"
          value={this.props.query}
          onChange={event => this.setState({ query: event.target.value })}
        />
      </form>
    );
  }
}

export default GifSearch;
