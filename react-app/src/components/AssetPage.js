
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import AssetLineGraph from './AssetLineGraph';
import '../styles/AssetPage.css'
import * as stockActions from '../store/stock'
import socket from './websocket'
import '../styles/AssetPage.css'

function AssetPage() {
    const dispatch = useDispatch()
    // param is the symbol in the path, i just didn't like typing symbol.symbol to access it.
    const param = useParams();

    useEffect(() => {
        dispatch(stockActions.getStock(param.symbol))
    }, [dispatch, param])

    const currentStock = useSelector(state => state.stocks.currentStock);
    const currentUser = useSelector(state => state.session.user);
    const [shares, setShares] = useState(0);

    let btnVal;
    let total;
    let price;

    socket.onmessage = function (event) {
        JSON.parse(event.data).data.forEach(stock => {
            if (stock.s === param.symbol) {
                price = stock.p
                console.log(price)
            }
        })
        // console.debug("WebSocket message received:", JSON.parse(event.data).data);
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (btnVal === 'BUY') {
            console.log(typeof price)
        }
        if (btnVal === 'SELL') {
            console.log(price)
        }
    }



    if (currentStock === null) {
        return (
            <h1>Loading...</h1>
        )
    } else {
        return (
            <div className='stockDiv'>
                <div>
                    <h1>{currentStock?.name} ({currentStock?.symbol})</h1>
                    <div> <AssetLineGraph /> </div>
                    <div>{currentStock?.ceo}</div>
                    <div>{currentStock?.employees}</div>
                    <div>{currentStock?.headquarters}</div>
                    <div>{currentStock?.founded}</div>
                </div>
                <div className='stockButtonsDiv'>
                    <form
                        className='transactionForm'
                        onSubmit={handleSubmit}>
                        <input placeholder="How much stock to buy?" type="number" step="1" onChange={(e)=>setShares(e.target.value)}></input>
                        <button value='buy' onClick={() => btnVal = 'BUY'}>Buy</button>
                        <button value='sell' onClick={() => btnVal = 'SELL'}>Sell</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default AssetPage;
