
import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import AssetLineGraph from './AssetLineGraph';
import '../styles/AssetPage.css'
import * as stockActions from '../store/stock'
import socket from './websocket'
import '../styles/AssetPage.css'

function AssetPage() {
    const [socketData, setSocketData] = useState(null)
    const dispatch = useDispatch()
    // param is the symbol in the path, i just didn't like typing symbol.symbol to access it.
    const param = useParams();
<<<<<<< HEAD
    useEffect(() => {
        dispatch(stockActions.getStock(param.symbol))
    },[])
    
    const stock = useSelector(state => state.stocks.currentStock)


    const stockData = useSelector(state => state.stock.currentStock)
    console.log(stockData)
    const stock = useSelector(state => state.stock.currentStock)

    return (
        <div className='stockDiv'>
            <div>
                {/* <AssetLineGraph /> */}
                <h1>{stockData?.name} ({stockData?.symbol})</h1>
                <div> | Graph will go here? |</div>
                <div>{stockData?.ceo}</div>
                <div>{stockData?.employees}</div>
                <div>{stockData?.headquarters}</div>
                <div>{stockData?.founded}</div>
            </div>
            <div className='stockButtonsDiv'>
                <button>Buy</button>
                <button>Sell</button>
=======



    useEffect(() => {
        dispatch(stockActions.getStock(param.symbol))
    },[dispatch, param])


    const stockData = useSelector(state => state.stock.currentStock)

    if (stockData) {
        return (
            <div className='stockDiv'>
                <div>
                    {/* <AssetLineGraph /> */}
                    <h1>{stockData?.name} ({stockData?.symbol})</h1>
                    <div> | Graph will go here? |</div>
                    <div>{stockData?.ceo}</div>
                    <div>{stockData?.employees}</div>
                    <div>{stockData?.headquarters}</div>
                    <div>{stockData?.founded}</div>
                </div>
                <div className='stockButtonsDiv'>
                    <button>Buy</button>
                    <button>Sell</button>
                </div>
>>>>>>> e5cf244c4913d1485d48bf0c1b947dd9407d8a38
            </div>
        )
    } else {
        return (
            <h1>Loading...</h1>
        )
    }


}

export default AssetPage;
