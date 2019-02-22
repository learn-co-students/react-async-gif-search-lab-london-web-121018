import React from 'react';

export default class GifList extends React.Component {
   
   render() {
      const gifs = this.props.gifs;

      return (
         <ul>
            {gifs.map( gif => {
               return <li key={gif.id}> <img src={gif.images.original.url} style={{verticalAlign: 'middle', margin: '20px'}}/> </li>
            })}
         </ul>
      );
   };
}