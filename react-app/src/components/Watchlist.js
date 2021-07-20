import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as watchlistActions from '../store/watchlist'
import WatchlistGraph from './WatchlistGraph';
import '../styles/watchlist.css'

// need to add watches from db

function Watchlist() {
  const dispatch = useDispatch();
  const history = useHistory();
  let user = useSelector(state => state.session.user)
  let watches = useSelector(state => state.watch.userWatches)
  let userId;
  if (user) {
    userId = user.id
  }

  // const [watch, getWatches] = useState('')

  // side effect to listen for
  useEffect(() => {
    if (userId)
      dispatch(watchlistActions.getWatches(userId))
  }, [userId])

  const handleDelete = (e) => {
    e.preventDefault();
    history.push('/');
    // return dispatch(deleteWatchedStock({userId, stock}))
  }

  return (
    <div className='watchlist__container'>
      <h1>My Watchlist</h1>
      {/* displays symbol for each watch on user's watchlist */}
      {watches && watches.map((watch) => {
        return (
          <div className="single-watch-container">
            <li className='watchlist-link' key={watch.id}>{watch.symbol}</li>
            {/* displays a graph for each watch on watchlist */}
            <WatchlistGraph />
            <p>Price</p>
            <button>Delete</button>
          </div>
        )
      })}
    </div >
  )
}

export default Watchlist;
