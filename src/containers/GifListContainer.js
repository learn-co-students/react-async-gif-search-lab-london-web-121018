import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {

  state = {
      // searchTerm: '',
      gifs: []
    }


  render() {
    return(
      <div>
        <GifSearch fetchGifs={this.fetchGifs}/>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  fetchGifs = (query = "bored") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(({data}) => {
          this.setState({ gifs: data.map(gif => ({ url: gif.images.original.url }) ) })
        })
      .then(console.log(this.state.gifs))
}

  componentDidMount() {
    this.fetchGifs()
  }

}


export default GifListContainer;
