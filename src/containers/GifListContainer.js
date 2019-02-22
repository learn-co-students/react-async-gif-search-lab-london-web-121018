import React from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

export default class GifListContainer extends React.Component {

    state = {
        searchQuery: '',
        gifs: [],
    };

    handleSearchInput = event => {
        this.setState({searchQuery: event.target.value})
    };

    fetchGifs = (query=this.state.searchQuery) => {
        const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`
        
        fetch(url)
            .then(resp => resp.json())
            .then(data => this.setState({gifs: data.data}))
            
    };

    componentDidMount() {
        this.fetchGifs('cats')
    }
    render () {
        console.log(this.state)
        return (
            
            <div>
                <GifSearch handleSearchInput={this.handleSearchInput} fetchGifs={this.fetchGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        );
    };

};