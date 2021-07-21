import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import LoggedInRoute from './components/auth/LoggedInRoute';
import LoggedOutRoute from './components/auth/LoggedOutRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Portfolio from './components/Portfolio';
import SearchBar from './components/Search';
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <LoggedInRoute path='/' exact={true}>
          <h1>Splash Page</h1>
        </LoggedInRoute>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/search' exact={true}>
          <SearchBar />
        </ProtectedRoute>
        <LoggedOutRoute path='/home' exact={true} >
          <Portfolio />
        </LoggedOutRoute>
        <Route path='/404'>
          <h1>Page Not Found</h1>
        </Route>
        <Route path='*'>
          <Redirect to='/404' />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
