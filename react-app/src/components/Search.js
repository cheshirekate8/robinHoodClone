import React, { useState } from 'react';
import data from './MOCK_DATA.json';


function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')


  return (
    <div className='search-bar'>
      <input type='text' placeholder='Search...' className='search-input' onChange={event => { setSearchTerm(event.target.value) }} />
      {data.filter((val) => {
        if (searchTerm == '') {
          return val
        } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return <div className='search-stock' key={key}>
          <ul>{val.first_name}</ul>
        </div>
      })}
    </div>
  )
}

export default SearchBar;
