import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Newsfeed from './Newsfeed';
import '../styles/Portfolio.css'
import Watchlist from './Watchlist';
import * as stockActions from '../store/stock'

function Portfolio() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(stockActions.getTicker())
        dispatch(stockActions.getDailyMovers())
        dispatch(stockActions.clearCurrentStock())
    })

    return (
        <div className='app__body'>
            <div className='app__container'>
                <Newsfeed />
                <Watchlist />
            </div>
        </div>
    )
}

export default Portfolio;
