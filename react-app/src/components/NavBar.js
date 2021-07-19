import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import '../styles/navbar.css'
import DemoLogin from './DemoLogin';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <>
        <div className='leftNav'>
          <li className='navbar-link'>
            <NavLink to='/home' exact={true} activeClassName='active'>
              Home
            </NavLink>
          </li>
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
              Home
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
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
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
