import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as watchlistActions from '../store/watchlist'
import WatchlistGraph from './WatchlistGraph';
import LineGraph from './LineGraph';
import '../styles/watchlist.css'
import socket from './websocket'

function Watchlist() {
  const [socketData, setSocketData] = useState(null);
  const dispatch = useDispatch();

  let watches = useSelector(state => state?.watches?.userWatches)
  
  // console.log(watches)
 






 


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
          // dispatch(watchlistActions.updateWatchPrice(stock.s, (stock.p).toFixed(2)))
        }
      })
    }

}, [])

  

  const graphProps = {
    dates: [], // array of dates if you want that to show, otherwise just the same length as balance.
    balance: [], // array of prices
    xdisplay: false,
    ydisplay: false,
    timeFormat: null,
  }



  // watches is an object with key value pairs of symbol: watchinfo
  // watches = {
  //   MSFT: {id: 1, symbol: 'MSFT', userid: 1, price:0}
  // }

  // Turn watches into an array of the watchinfo
  let theWatches;
  // console.log(theWatches)
  if (watches) theWatches = Object.values(watches)

  // console.log(theWatches)
  let sparks = []
    theWatches?.forEach(watch => {
      sparks.push(watch.spark.c.slice(watch.spark.c.length -24, watch.spark.c.length))
    });

  // console.log(sparks)

  return (
    <div className='watchlist__container'>
      <h2 classname='watchlist-label'>Watchlist </h2>
      <div className="watch-container">
        {theWatches?.map((watch) => {
          const prevClose = watch.spark.c[0]
          const diff = (watch.price - prevClose).toFixed(2)
          const diffPercent = (diff / prevClose * 100).toFixed(2)
          return (
            <div className='watch-wrapper' key={watch.stockId}>
            <h4 className='watchlist-link' key={watch.stockId}>{watch.symbol}</h4>
            <div className='watches-graph' key={watch.price}>
              <WatchlistGraph props={watch.spark.c.slice(watch.spark.c.length - 24, watch.spark.length)} />
            </div>
            <div>
              <h4>{watch.price}</h4>
              <h4>{diffPercent}%</h4>
            </div>
          </div>
          )
        })}
      </div>

    </div >
  )
}

export default Watchlist;
