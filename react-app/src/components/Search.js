import React, { useState } from 'react';
import { useSelector } from 'react-redux';


function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const data = useSelector(state => state.stock.allStocks.stocks)

  return (
    <div className='search-bar'>
      <input type='text' placeholder='Search...' className='search-input' onChange={event => { setSearchTerm(event.target.value) }} />
      {data.filter((val) => {
        if (searchTerm == '') {
          return val
        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase()) || val.symbol.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return <div className='search-stock' key={key}>
          <ul>
            <li>{val.name}</li>
            <li>{val.symbol}</li>
          </ul>
        </div>
      })}
    </div>
  )
}

export default SearchBar;
