import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import '../styles/Search.css'
import * as stockActions from '../store/stock'


function SearchBar() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(stockActions.clearCurrentStock())
})

  const [searchTerm, setSearchTerm] = useState('')
  const data = useSelector(state => state.stocks.allStocks.stocks)

  return (
    <div className='search-container'>
      <input type='text' placeholder='Search' className='search-input' onChange={event => { setSearchTerm(event.target.value) }} />
      {data.filter((val) => {
        if (searchTerm == '') {
          return val
        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase()) || val.symbol.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return <div className='search-stock' key={key}>
          <ul className='search-item-container'>
            <img src={val.imgUrl} style={{ width: 40, height: 40, marginRight: 10, backgroundColor: 'white' }}
            />
            <Link to={`${val.symbol}`} className='search-link'>{val.name} ({val.symbol})</Link>
          </ul>
        </div>
      })}
    </div>
  )
}

export default SearchBar;
