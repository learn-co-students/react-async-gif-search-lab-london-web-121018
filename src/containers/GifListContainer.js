import React from 'react';
import GifList from './../components/GifList'
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends React.Component {

   state = {
      gifs: [],
      searchTerm: 'cats'
   }

   componentDidMount() {
      fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
         .then( resp => resp.json() )
         .then( data => {
            this.setState({
               gifs: data.data.slice(0, 3)
            })
         })
   }

   componentDidUpdate() {
      fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
         .then(resp => resp.json())
         .then(data => {
            this.setState({
               gifs: data.data.slice(0, 3)
            })
         })
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
            < GifSearch handleSubmit={this.handleSubmit}/>
         </div>
      );
   }
}