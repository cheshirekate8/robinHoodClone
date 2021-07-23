import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Newsfeed.css';
import LineGraph from './LineGraph';
import Ticker from './Ticker';


function Newsfeed() {
    const user = useSelector(state => state.session.user)
    const transactions = useSelector(state => state?.transactions?.transactions)
    const [dates, setDates] = useState();
    const [balance, setBalance] = useState();
    const startingBalance = useRef(user?.balance);
    let difference = useRef(0);
    let percentage = useRef(0);

    let balanceArr = [startingBalance.current]
    // console.log(startingBalance)

    
    

    // const createUserBalanceHistory = () => {
    //     let balances = [];
    //     for(let i = 30; i > 0; i--) {
    //         let balance = Math.floor(user.balance/i);
    //         balances.push(balance)
    //     }
    //     balances.push(startingBalance.current.toFixed(2))
    //     setBalance(balances)
    // }



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
        transactions?.forEach(transaction => {
            if (transaction.buy === 'yes') {
                startingBalance.current -= transaction.total
                const newBalance = startingBalance.current
                balanceArr.push(newBalance)
                difference.current -= transaction.total
                percentage.current = newBalance / user.balance
                setBalance(balanceArr)
            } else if (transaction.sell === 'yes') {
                startingBalance.current += transaction.total
                const newBalance = startingBalance.current
                balanceArr.push(newBalance)
                difference.current += transaction.total
                percentage.current = newBalance / user.balance
                setBalance(balanceArr)
            } else {
                return;
            }
        });
        createDates()
        // createUserBalanceHistory()
    }, [transactions]);

    const graphProps = {
        dates: dates, // array of dates if you want that to show, otherwise just the same length as balance.
        balance: balance, // array of prices
        xdisplay: false,
        ydisplay: false,
        timeFormat: 'MM/dd/yyyy HH:mm',
      }

    return (
        <div className='newsfeed__container'>
            <div className='newsfeed__chartSection'>
                <div className='newsfeed__portfolio'>
                    <h1>${startingBalance.current}</h1>
                    <p style={difference.current > 0 ? {color:'chartreuse'} : {color:'red'} } >
                        {difference.current} {difference.current > 0 ? + percentage.current.toFixed(2) : - percentage.current.toFixed(2)}% Today</p>
                </div>
                <div className='newsfeed__chart'>
                    <LineGraph props={graphProps} />
                </div>
                <div className='ticker__container'>
                    <Ticker/>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed;
