import React from 'react';

export default class GifSearch extends React.Component {
   
   state = {
      searchInput: ''
   }

   handleChange = (event) => {
      this.setState({
         searchInput: event.target.value
      })
   }
   
   render() {
      return (
         <form onSubmit={this.props.handleSubmit} style={{position: 'fixed', left: '80%', top: '5%', textAlign: 'right'}}>
            <label><strong>Enter a Search Term:</strong>
            <input type='text' name='searchInput' value={this.state.searchInput} onChange={this.handleChange} />
            </label><br></br>
            <input type='submit' value='Find Gifs' style={{padding: '5px, 40px'}} />
         </form>
      );
   };

}