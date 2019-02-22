import React from "react";

export default class GifList extends React.Component {

    render () {
        const gifs = this.props.gifs.map(gif => <li key={gif.id}><img src={gif.images.original.url}/></li>)
        return (
            <ul>
                {gifs}
            </ul>
        );
    };
};