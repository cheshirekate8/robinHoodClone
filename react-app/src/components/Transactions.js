import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as transActions from '../store/transactions';
import { NavLink } from 'react-router-dom';
import '../styles/transactions.css'


function Transactions() {
  const dispatch = useDispatch()
  const userId = useSelector(state => state.session.user?.id)
  const transactionData = useSelector(state => state.transactions?.transactions)

  useEffect(() => {
    dispatch(transActions.getTransactions(userId))
  }, []);


  return (
    <div className='table-container'>
      <div>
        <h1 className='table-title'>Transaction History</h1>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Symbol</th>
            <th>Buy</th>
            <th>Sell</th>
            <th>Shares</th>
            <th>Total</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((transaction, key) => {
            return <tr key={key} className='active-row'>
              <td>{transaction.id}</td>
              <td>{transaction.symbol}</td>
              <td>{transaction.buy}</td>
              <td>{transaction.sell}</td>
              <td>{transaction.shares}</td>
              <td>${transaction.total.toFixed(2)}</td>
              <td>{transaction.time}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
