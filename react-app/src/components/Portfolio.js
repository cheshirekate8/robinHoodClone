import React from 'react';
import Newsfeed from './Newsfeed';
import '../styles/Portfolio.css'

function Portfolio() {
    return (
        <div className='app__body'>
            <div className='app__container'>
                <Newsfeed />
                <div className='watches-placeholder'></div>
            </div>
        </div>
    )
}

export default Portfolio;
