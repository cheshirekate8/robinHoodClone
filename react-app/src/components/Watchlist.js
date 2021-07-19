import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as watchlistActions from '../store/watchlist'
import '../styles/watchlist.css'

// need to add watches from db

function Watchlist() {
  const dispatch = useDispatch();
  const history = useHistory();
  let user = useSelector(state => state.session.user)
  let userId;
  if (user) {
    userId = user.id
  }
  console.log(userId)
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
      <li>Stock-1</li><button>delete</button>
      <li>Stock-2</li><button>delete</button>
      <li>Stock-3</li><button>delete</button>
      <li>Stock-4</li><button>delete</button>
    </div>
  )
}

export default Watchlist;
