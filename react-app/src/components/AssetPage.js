
import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import AssetLineGraph from './AssetLineGraph';
import '../styles/AssetPage.css'
import * as stockActions from '../store/stock'
import socket from './websocket'
import '../styles/AssetPage.css'

// function AssetPage() {
//     const [socketData, setSocketData] = useState(null)
//     const dispatch = useDispatch()
//     const param = useParams();
//     const stock = useSelector(state => state.stock.currentStock)

//     useEffect(() => {
//         if(param)
//         dispatch(stockActions.getStock(param.symbol))
//     },[])

//     // grab the data from the websocket and set 
//     // to socketData slice of state.
//     let data;
//     socket.onmessage = function(event) {
//     data = JSON.parse(event.data) 
//         setSocketData(data)
//     }

    // if socketData has been updated and there are watches in the watches 
    // obj, sift thru the socket data and if one of the stocks in our
    // watches has had a change to its price, update the price in the store.
//     useEffect(() => {
//         if (socketData?.data && stock) {
//         socketData.data.forEach( socketStock => {
//             // console.log(stock.s)
//             if (socketStock.s === stock.symbol && stock.price !== socketStock.p) {
//             //   dispatch(stockActions.updateStockPrice(socketStock.p))
//             }
//         })
//         }

//     }, [socketData])

//     return (
//         <div className='app__body'>
//             <div className='app__container'>
                
//                 <AssetLineGraph />
//             </div>
//         </div>
//     )
// }

//     useEffect(() => {
//         if(param)
//         dispatch(stockActions.getStock(param.symbol))
//     })

//       // grab the data from the websocket and set 
//   // to socketData slice of state.
//   let data;
//   socket.onmessage = function(event) {
//   data = JSON.parse(event.data) 
//     setSocketData(data)
//   }

//   // if socketData has been updated and there are watches in the watches 
//   // obj, sift thru the socket data and if one of the stocks in our
//   // watches has had a change to its price, update the price in the store.
//   useEffect(() => {
//     if (socketData?.data && stock) {
//       socketData.data.forEach( socketStock => {
//         // console.log(stock.s)
//         if (socketStock.s === stock.symbol && stock.price !== socketStock.p) {
//           dispatch(stockActions.updateStockPrice(socketStock.p))
//         }
//       })
//     }

// }, [socketData])

//     return (
//         <div className='app__body'>
//             <div className='app__container'>
//                 <AssetLineGraph />
//             </div>
//         </div>
//     )
// }

// export default AssetPage;