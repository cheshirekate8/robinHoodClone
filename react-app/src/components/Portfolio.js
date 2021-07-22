import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Newsfeed from './Newsfeed';
import '../styles/Portfolio.css'
import Watchlist from './Watchlist';
import * as stockActions from '../store/stock'
const moment = require('moment')

function Portfolio() {
    const dispatch = useDispatch()

    const date = moment().format('YYYY-MM-DD')
    console.log('THE DATE IS ', date)

    useEffect(() => {
        dispatch(stockActions.getTicker())
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


