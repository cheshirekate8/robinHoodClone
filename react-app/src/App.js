import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import LoggedInRoute from './components/auth/LoggedInRoute';
import LoggedOutRoute from './components/auth/LoggedOutRoute';
import Transactions from './components/Transactions';
import User from './components/User';
import Portfolio from './components/Portfolio';
import SearchBar from './components/Search';
import AssetPage from './components/AssetPage'
import { authenticate } from './store/session';
import * as stockActions from './store/stock';
import * as transActions from './store/transactions';
import * as newsActions from './store/news';
import SplashPage from './components/SplashPage'



function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const username = useSelector(state => state.session.user?.username);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      if (username) {
        await dispatch(stockActions.addAllStocks())
        await dispatch(transActions.getTransactions())
        await dispatch(newsActions.getNews())
        await dispatch(stockActions.getTicker())
      }
      setLoaded(true);
    })();
  }, [dispatch, username]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <LoggedInRoute path='/' exact={true}>
          <SplashPage />
        </LoggedInRoute>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        {/* <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute> */}
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/search' exact={true}>
          <SearchBar />
        </ProtectedRoute>
        <ProtectedRoute path='/transactions' exact={true}>
          <Transactions />
        </ProtectedRoute>
        <ProtectedRoute path='/home' exact={true} >
          <Portfolio />
        </ProtectedRoute>
        <ProtectedRoute path='/:symbol' exact={true}>
          <AssetPage />
        </ProtectedRoute>
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
