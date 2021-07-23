
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
    let price = currentStock?.spark[0];

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (btnVal === 'BUY') {
            let total = price * shares
            let newBalance = currentUser.balance - total
            console.log(newBalance)
            //Add validator where if newBalance < 0 return error
        }
        if (btnVal === 'SELL') {
            let total = price * shares
            let newBalance = currentUser.balance + total
            console.log(newBalance)
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
