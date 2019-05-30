import React from 'react';

class Search extends React.Component {
  constructor () {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = { value: ''};
  }

  handleChange(event) {
    console.log('handle change called');
    console.log(event.target.value);
    this.setState({
      value: event.target.value,
    })
  }

  render(){
    return(
      <form className='search'>
        Enter your city: <input type="text" name="city" value={this.state.value} onChange={this.handleChange} /><br></br>
      </form>
    )
  }
}

export default Search;