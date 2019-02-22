import React from "react";

export default class GifSearch extends React.Component {

    render () {
        return (
        <div>
            <input type='text' placeholder='search...' onChange={this.props.handleSearchInput}></input>
            <button onClick={this.props.fetchGifs}>search gifs!</button>
        </div>
        )
    };
};