import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as newsActions from '../store/news'


const NewsStories = () => {
    const dispatch = useDispatch();
    const [stories, setStories] = useState([]);
    const theStories = useSelector(state => state.news.market)
    
    useEffect(() => {
        setStories(theStories)
    }, [theStories])

    console.log(stories)


    return (
        <div className="news-stories">

        </div>
    )
}

export default NewsStories;