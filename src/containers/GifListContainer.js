import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

  state = {
    gifs: []
  }

handleGifSearch = (event) => {
  event.preventDefault()

    fetch(`http://api.giphy.com/v1/gifs/search?q=${event.target.value}&api_key=dc6zaTOxFJmzC&limit=3`)
    .then(resp => resp.json())
    .then(gifs => this.setState({ gifs: gifs.data }))
  }

  render(){
    return(
      <div>
        < GifSearch handleSearch={this.handleGifSearch}/>
        < GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}
