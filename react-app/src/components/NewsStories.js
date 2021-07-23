import React, {useEffect, useState, Link} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as newsActions from '../store/news'
import '../styles/NewsStories.css'


const NewsStories = () => {
    const dispatch = useDispatch();
    const [stories, setStories] = useState([]);
    const theStories = useSelector(state => state.news.market)
    
    useEffect(() => {
        setStories(theStories)
    }, [theStories])
    
    const topStories = stories?.slice(0, 25);


    return (
        <div className='news-wrapper'>
            <h2>Top Stories</h2>
        <div className="news-stories">
            {/* make either the whole div or just the img a link to the story
                the pictures need to be sized, just a warning!
            */}
            {topStories?.map(story => (
                <div to={story.url} className="news-story" key={story.id}>
                    <h5 className="news-story-source">{story.source}</h5>
                    <p className="news-story-headline">{story.headline}</p>
                    <img src={story.image} alt={story.headline} className="news-story-image" />
                    <p className="news-story-summary">{story.summary}</p>
                </div>
            ))}
        </div>
        </div>
    )
}

export default NewsStories;