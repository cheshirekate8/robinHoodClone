import React from 'react';
import '../styles/SplashPage.css'
import Lottie from 'react-lottie-player'
import animation from "../media/Drawkit/DrawKit - Animation Pack - Watermelon/PRODUCT/Animation 10/watermelon-pack-animation-10.json"

function SplashPage() {
    return (
        <div className='splashDiv'>
            <Lottie
                loop
                animationData={animation}
                play
                style={{ width: 500, height: 500 }}
                className='splashAnimation'
            />
            <div className='splashWords'>
                <h2 className='splashText'>Learn how to invest in the stock market in real time with...</h2>
                <h1 className='splashTitle' style={{ font: 'Trade Winds' }}>Zorro!</h1>
                <p className='splashText'>Zorro is a real-time, stock market simulator where you can use fake money in the real stock market. Choose your difficulty, and see how much money you can make... or lose!</p>
            </div>
        </div>
    )
}

export default SplashPage;
