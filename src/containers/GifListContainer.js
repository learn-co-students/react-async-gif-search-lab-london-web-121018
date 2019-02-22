import React from 'react';
import GifList from './../components/GifList'
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends React.PureComponent {

   state = {
      gifs: [],
      searchTerm: 'cats'
   }

   fetchGifs = (searchTerm = 'cats') => {
      fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
         .then(resp => resp.json())
         .then(data => {
            this.setState({
               gifs: data.data.slice(0, 3)
            })
         })
   }

   componentDidMount() {
      this.fetchGifs()
   }

   handleSubmit = (event) => {
      event.preventDefault();
      this.setState({
         searchTerm: event.target.searchInput.value
      })
   }

   render() {
      return(
         <div>
            < GifList gifs={this.state.gifs} />
            < GifSearch fetchGifs={this.fetchGifs} handleSubmit={this.handleSubmit}/>
         </div>
      );
   }
}