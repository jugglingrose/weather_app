import React from 'react';

class Search extends React.Component {

  render(){
    const { handleSearchInput, handleSearchSubmit, city} = this.props;

    return(
      <form className='search' onSubmit={handleSearchSubmit}>
        Enter your city: <input type="text" name="city" value={city} onChange={handleSearchInput} />
        <button type="submit" value="submit">SEARCH</button>
      </form>
    )
  }
}

export default Search;