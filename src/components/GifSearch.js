import React, { Component} from 'react';

export default class GifSearch extends Component {

state = {
  searchedInput: ""
}

handleChange = (event) => {
  this.setState({searchedInput: event.target.value})
}

render(){
  return (
  <form onSubmit={this.props.handleSearch}>
    <input type="text" onChange={this.handleChange} placeholder="Search a gif!"/>
    <button type="submit">Find your Gif!</button>
  </form>
)
}

}
