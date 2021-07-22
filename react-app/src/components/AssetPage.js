
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
    let btnVal;

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(btnVal)
    }
    console.log(currentStock)
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
                            <input placeholder="How much?" type="number" min="0" step="1" fixed="2"></input>
                            <select >
                                <option>Stock</option>
                                <option>Money</option>
                            </select>
                            <button value='buy' onClick={() => btnVal = 'BUY'}>Buy</button>
                            <button value='sell' onClick={() => btnVal = 'SELL'}>Sell</button>
                        </form>
                    </div>
                </div>
            )
    }
}


export default AssetPage;
