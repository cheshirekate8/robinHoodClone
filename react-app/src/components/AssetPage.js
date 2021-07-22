
import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import AssetLineGraph from './AssetLineGraph';
import '../styles/AssetPage.css'
import * as stockActions from '../store/stock'
import socket from './websocket'
import '../styles/AssetPage.css'

function AssetPage() {
    const [socketData, setSocketData] = useState(null)
    const dispatch = useDispatch()
    // param is the symbol in the path, i just didn't like typing symbol.symbol to access it.
    const param = useParams();
    
    useEffect(() => {
        if(param)
        dispatch(stockActions.getStock(param.symbol))
    },[])
    
    const stock = useSelector(state => state.stock.currentStock)

    

    return (
        <div className='app__body'>
            <div className='app__container'>

                <AssetLineGraph />
            </div>
        </div>
    )
}

export default AssetPage;
