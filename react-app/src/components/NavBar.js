import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import '../styles/navbar.css'

const NavBar = () => {
  return (
    <div >
      <nav className='navbar-container'>
        <ul>

          <li className='navbar-link'>
            <NavLink to='/' exact={true} activeClassName='active'>
              Home
            </NavLink>
          </li>

          <li className='navbar-link'>
            <NavLink to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>
          </li>

          <li className='navbar-link'>
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
          </li>

          <li className='navbar-link'>
            <NavLink to='/users' exact={true} activeClassName='active'>
              Users
            </NavLink>
          </li>

          <li className='navbar-link'>
            <LogoutButton />
          </li>

        </ul>
      </nav >
    </div >
  );
}

export default NavBar;
