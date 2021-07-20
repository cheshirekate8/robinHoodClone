import React, { useState, useEffect } from 'react';
// import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as watchlistActions from '../store/watchlist'
import WatchlistGraph from './WatchlistGraph';
import '../styles/watchlist.css'
import socket from './websocket'

function Watchlist() {
  const [socketData, setSocketData] = useState(null);
  const dispatch = useDispatch();
  // const history = useHistory();
  let user = useSelector(state => state.session.user)
  let watches = useSelector(state => state.watch.userWatches)
  let userId;
  if (user) {
    userId = user.id
  }
  
  // Once the user has been grabbed from the store, 
  // update the watches store for that user.
  useEffect(() => {
    if (userId)
      dispatch(watchlistActions.getWatches(userId))
  }, [userId])

  // grab the data from the websocket and set 
  // to socketData slice of state.
  let data;
  socket.onmessage = function(event) {
  data = JSON.parse(event.data) 
    setSocketData(data)
  }

  // socket data comes back in this format
  // its an object, and socket.data is an array of objects.
  // {
  //   "data": [{
  //   "c":["1","8"],
  //   "p":280.09,
  //   "s":"MSFT",
  //   "t":1626805040397,
  //   "v":100
  // },{
  //   "c":["12"],
  //   "p":280.09,
  //   "s":"MSFT",
  //   "t":1626805040411,
  //   "v":14
  // }],"type":"trade"}

  // if socketData has been updated and there are watches in the watches 
  // obj, sift thru the socket data and if one of the stocks in our
  // watches has had a change to its price, update the price in the store.
  useEffect(() => {
    if (socketData && watches) {
      socketData.data.forEach( stock => {
        // console.log(stock.s)
        if (watches[stock.s] && watches[stock.s].price !== stock.p) {
          dispatch(watchlistActions.updateWatchPrice(stock.s, stock.p))
        }
      })
    }

}, [socketData])



  // watches is an object with key value pairs of symbol: watchinfo
  // watches = {
  //   MSFT: {id: 1, symbol: 'MSFT', userid: 1, price:0}
  // }

  // Turns watches into an array of the watchinfo
  let theWatches;
  if (watches) theWatches = Object.values(watches)

  return (
    <div className='watchlist__container'>
      <h1>My Watchlist</h1>

      <div className="testwatchlist">
        {theWatches && theWatches.map((watch, i) => {
          return (
          <>
            <p className='watchlist-link' key={watch.id}>{watch.symbol}, {watch.price}</p>
          </>
          )
        })}
      </div>

    </div >
  )
}

export default Watchlist;
