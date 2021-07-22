import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Newsfeed.css';
import LineGraph from './LineGraph';
import Ticker from './Ticker';
import * as transActions from './store/transactions'


function Newsfeed() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user);
    const [dates, setDates] = useState();
    const [balance, setBalance] = useState()
    


    const createUserBalanceHistory = () => {
        let balances = [];
        for(let i = 30; i > 0; i--) {
            let balance = Math.floor(user.balance/i);
            balances.push(balance)
        }
        balances.push(user.balance)
        setBalance(balances)
    }



    const createDates = () => {
        let dates = [];
        for(let i = 0; i < 30; i++) {
            let date = new Date();
            date.setHours(0,0,0,0);
            date.setDate(i);
            dates.push(date)
        }
        setDates(dates)
    }

    useEffect(() => {
        dispatch(transActions.getTransactions(user.id))
        createDates()
        createUserBalanceHistory()
    }, [dispatch])


    return (
        <div className='newsfeed__container'>
            <div className='newsfeed__chartSection'>
                <div className='newsfeed__portfolio'>
                    <h1>${user.balance}</h1>
                    <p>+50.68 (+0.05%) Today</p>
                </div>
                <div className='newsfeed__chart'>
                    <LineGraph balance={balance} dates={dates} />
                </div>
                <div className='ticker__container'>
                    <Ticker/>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed;
