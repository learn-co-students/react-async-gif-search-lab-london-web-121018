import React, { Component } from 'react';
// import GifListContainer from '../containers/GifListContainer';
// import GifList from './GifList';

class GifSearch extends Component {
  constructor() {
    super()

    this.state = {
      searchTerm: '',
      // gifs: []
    }


  }

  handleSearchInputChange = event => this.setState({ searchTerm: event.target.value })

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchGifs(this.state.searchTerm)
  }


  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="search-input">Your search term</label>
        <br/>
        <br/>
        <input
          id="search-input"
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleSearchInputChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default GifSearch;
