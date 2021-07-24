
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import AssetLineGraph from './AssetLineGraph';
import '../styles/AssetPage.css'
import * as stockActions from '../store/stock'
import socket from './websocket'
import '../styles/AssetPage.css'
import * as transActions from '../store/transactions'
import { useHistory } from "react-router";

function AssetPage() {
    const dispatch = useDispatch()
    // param is the symbol in the path, i just didn't like typing symbol.symbol to access it.
    const param = useParams();
    const history = useHistory();

    useEffect(() => {
        dispatch(stockActions.getStock(param.symbol))
    }, [dispatch, param])

    const currentStock = useSelector(state => state.stocks.currentStock);
    const currentUser = useSelector(state => state.session.user);
    const [shares, setShares] = useState(0);

    // console.log(currentStock.spark)

    let btnVal;
    let price = currentStock?.spark[0];

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (btnVal === 'BUY') {
            let total = price * shares
            let newBalance = currentUser.balance - total
            dispatch(transActions.postTransactions({ userId: currentUser.id, symbol: currentStock.symbol, shares: shares, total: total, balance: newBalance, buy: 'yes', sell: null }))

            //Add validator where if newBalance < 0 return error
            history.push(`/transactions`)
        }
        if (btnVal === 'SELL') {
            let total = price * shares
            let newBalance = currentUser.balance + total

            dispatch(transActions.postTransactions({ userId: currentUser.id, symbol: currentStock.symbol, shares: shares, total: total, balance: newBalance, buy: null, sell: 'yes' }))
            history.push(`/transactions`)
        }
    }



    if (currentStock === null) {
        return (
            <h1>Loading...</h1>
        )
    } else {
        return (
            <div className='stockDiv'>
                <h1 className='stockTitle'>{currentStock?.name} ({currentStock?.symbol})</h1>
                <div className='lineGraphDiv'> <AssetLineGraph props={currentStock?.spark}/> </div>
                {/* <img className='imgDiv' src={currentStock.imgUrl} /> */}
                <div className='ceoLabel'>CEO</div>
                <div className='ceoInfo'>{currentStock?.ceo}</div>
                <div className='employeedLabel'>Employees</div>
                <div className='employeesInfo'>{currentStock?.employees}</div>
                <div className='headquartersLabel'>Headquarters</div>
                <div className='headquartersInfo'>{currentStock?.headquarters}</div>
                <div className='foundedLabel'>Founded</div>
                <div className='foundedInfo'>{currentStock?.founded}</div>
                <form
                    className='transactionForm'
                    onSubmit={handleSubmit}>
                    <div className='stockFormTitle' for='stockInput'> Buy or Sell ({currentStock?.symbol})!</div>
                    <input className='stockFormInput' name="stockInput" placeholder="Please enter an amount" type="number" step="1" onChange={(e) => setShares(e.target.value)}></input>
                    <button className='stockFormBuy' value='buy' onClick={() => btnVal = 'BUY'}>Buy</button>
                    <button className='stockFormSell'  value='sell' onClick={() => btnVal = 'SELL'}>Sell</button>
                </form>
            </div>
        )
    }
}


export default AssetPage;
