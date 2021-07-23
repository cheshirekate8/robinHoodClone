import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


function Transactions() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/transactions/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  // const userComponents = users.map((user) => {
  //   return (
  //     <li key={user.id}>
  //       <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
  //     </li>
  //   );
  // });

  return (
    <>
      <h1>Transaction History</h1>
    </>
  );
}

export default Transactions;
