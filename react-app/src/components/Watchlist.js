import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as watchlistActions from '../store/watchlist'
import WatchlistGraph from './WatchlistGraph';
import '../styles/watchlist.css'
import socket from './websocket'

function Watchlist() {
  const [socketData, setSocketData] = useState(null);
  const [theWatches, setTheWatches] = useState(null);
  const dispatch = useDispatch();

  let watches = useSelector(state => state?.watches?.userWatches)
  const user = useSelector(state => state?.session.user)

  // Turn watches into an array of the watchinfo
  useEffect(() => {
    if (watches) setTheWatches(Object.values(watches))
  }, [watches])

  let data;
  socket.onmessage = function(event) {
  data = JSON.parse(event.data)
    setSocketData(data)
  }

  // if socketData has been updated and there are watches in the watches 
  // obj, sift thru the socket data and if one of the stocks in our
  // watches has had a change to its price, update the price in the store.
  useEffect(() => {
    if (socketData?.data && watches) {
      socketData.data.forEach( stock => {
        if (watches[stock.s] && watches[stock.s].price !== (stock.p).toFixed(2)) {
          dispatch(watchlistActions.updateWatchPrice(stock.s, (stock.p).toFixed(2)))
        }
      })
    }

}, [dispatch])

  
  // const graphProps = {
  //   dates: [], // array of dates if you want that to show, otherwise just the same length as balance.
  //   balance: [], // array of prices
  //   xdisplay: false,
  //   ydisplay: false,
  //   timeFormat: null,
  // }

  // watches is an object with key value pairs of symbol: watchinfo
  // watches = {
  //   MSFT: {id: 1, symbol: 'MSFT', userid: 1, price:0}
  // }

 
  
  const removeWatch = (watchId) => {
    dispatch(watchlistActions.removeWatch(user.id, watchId))
  }

  return (
    <div className='watchlist__container'>
      <h2 id='watchlist-label'>Watchlist </h2>
      <div className="watch-container">
        {theWatches?.map((watch) => {
          const prevClose = watch.spark?.c[0]
          const diff = (watch.price - prevClose).toFixed(2)
          const diffPercent = (diff / prevClose * 100).toFixed(2)
          return (
            <div className='watch-wrapper' key={watch.stockId}>
            <div className='watches-graph' key={watch.price}>
            <div className='watches-symbol_and_delete'>
            <button className='remove-watch_btn' onClick={() => removeWatch(watch.id)}>
            <i className="fas fa-minus-circle"></i>
            </button>
            <Link to={`/${watch.symbol}`} className='watchlist-link' key={watch.stockId}>{watch.symbol}</Link>
            </div>
              <WatchlistGraph watch={watch?.spark?.c} />
            </div>
            <div className='watch-prices'>
              <h4 className='watch-info' style={diff > 0
                        ? {color:'chartreuse'} : {color:'red'}
                    }>{watch.price}</h4>
              <h4 className='watch-info' style={diffPercent > 0
                        ? {color:'chartreuse'} : {color:'red'}
                    }>{diffPercent}%</h4>
            </div>
          </div>
          )
        })
        }
      </div>

    </div >
  )
}

export default Watchlist;
