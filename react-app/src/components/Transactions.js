import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as transActions from '../store/transactions';
import { NavLink } from 'react-router-dom';
import '../styles/transactions.css'


function Transactions() {
  const dispatch = useDispatch()
  const userId = useSelector(state => state.session.user?.id)
  const data = useSelector(state => state.transactions.transactions)

  useEffect(() => {
    dispatch(transActions.getTransactions(userId))
  }, []);

  // const userComponents = users.map((user) => {
  //   return (
  //     <li key={user.id}>
  //       <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
  //     </li>
  //   );
  // });

  return (
    <div className='table-container'>
      <h1 className='table-title'>Transaction History</h1>
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
        {/* <tbody>
          {data.map((id) =>
            (<tr className='active-row'>{id}</tr>)
          )}
        </tbody> */}
      </table>
    </div>
  );
}

export default Transactions;
