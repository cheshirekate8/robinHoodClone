
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import AssetLineGraph from './AssetLineGraph';
import '../styles/AssetPage.css'
import * as stockActions from '../store/stock'
import socket from './websocket'
import '../styles/AssetPage.css'

function AssetPage() {
    const [socketData, setSocketData] = useState(null)
    const [stockData, setStockData] = useState(null)
    const dispatch = useDispatch()
    // param is the symbol in the path, i just didn't like typing symbol.symbol to access it.
    const param = useParams();
    const stock = useSelector(state => state.stock?.currentStock)

    useEffect(() => {
        dispatch(stockActions.getStock(param.symbol))
        setStockData(stock)
    },[dispatch, param, stock])


    const stockData = useSelector(state => state.stock?.currentStock)

    let btnVal;

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(btnVal)
    }
    
    if (stockData) {
        return (
            <div className='stockDiv'>
                <div>
                    <h1>{stockData?.name} ({stockData?.symbol})</h1>
                    {/* <div> <AssetLineGraph /> </div> */}
                    <div>{stockData?.ceo}</div>
                    <div>{stockData?.employees}</div>
                    <div>{stockData?.headquarters}</div>
                    <div>{stockData?.founded}</div>
                </div>
                <div className='stockButtonsDiv'>
                    <form
                        className='transactionForm'
                        onSubmit={handleSubmit}>
                        <input placeholder="How much?" type="number" min="0" step="1" fixed="2"></input>
                        <select >
                            <option>Stock</option>
                            <option>Money</option>
                        </select>
                        <button value='buy' onClick={() => btnVal='BUY'}>Buy</button>
                        <button value='sell'onClick={() => btnVal='SELL'}>Sell</button>
                    </form>
                </div>
            </div>
        )
    } else {
        return (
            <h1>Loading...</h1>
        )
    }


}

export default AssetPage;
