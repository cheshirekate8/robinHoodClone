import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import '../styles/navbar.css'
import DemoLogin from './DemoLogin';
import { useSelector } from 'react-redux';
import logo from '../media/zorro_logo_RED.png';

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  // const [searchTerm, setSearchTerm] = useState('')
  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <>
        <div className='leftNav'>
          <li className='navbar-link'>
            <NavLink to='/home' exact={true} activeClassName='active'>
              <img src={logo} height='64px' width='64px' />
            </NavLink>
          </li>
        </div>
        <div className='centerNav'>
          <h1>Zorro</h1>
        </div>
        <div className='rightNav'>
          <li className='navbar-link'>
            <NavLink to='/search' exact={true} activeClassName='active'>
              Search
            </NavLink>
          </li>
          <li className='navbar-link'>
            <NavLink to='/transactions' exact={true} activeClassName='active'>
              Transactions
            </NavLink>
          </li>
          <li className='navbar-link'>
            <LogoutButton />
          </li>
        </div>
      </>
    )
  } else {
    sessionLinks = (
      <>
        <div className='leftNav'>
          <li className='navbar-link'>
            <NavLink to='/' exact={true} activeClassName='active'>
              <img src={logo} height='64px' width='64px' />
            </NavLink>
          </li>
        </div>
        <div className='rightNav'>
          <li className='navbar-link'>
            <NavLink to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>
          </li>
          <li className='navbar-link'>
            <NavLink to='/sign-up' exact={true} activeClassName='active' className='button'>
              Sign Up
            </NavLink>
          </li>
          <li className='navbar-link'>
            <DemoLogin />
          </li>
        </div>
      </>
    )
  }

  return (
    <nav className='navbar-container'>
      {sessionLinks}
    </nav>
  );
}

export default NavBar;
