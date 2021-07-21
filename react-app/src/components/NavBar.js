import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import '../styles/navbar.css'
import DemoLogin from './DemoLogin';
import { useSelector } from 'react-redux';
import logo from '../media/zorro_logo_RED.png';
// import data from 'data_file';


const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  const [searchTerm, setSearchTerm] = useState('')
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
          <div className='search-bar'>
            <input type='text' placeholder='Search...' className='search-input' onChange={event => { setSearchTerm(event.target.value) }} />
            {/* {data.filter((val) => {
              if (searchTerm == '') {
                return val
              } else if (val.symbol.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val
              }
            }).map((val, symbol) => {
              return <div className='search-stock' key={symbol}>
                <p>{val.key}</p>
              </div>
            })} */}
            {/* <button className='search-button'>Search</button> */}
          </div>
        </div>
        <div className='rightNav'>
          <li className='navbar-link'>
            <NavLink to='/users' exact={true} activeClassName='active'>
              Users
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
