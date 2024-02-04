import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {newsSelector} from '../redux/newsData';
import {
    getLatestNews
} from '../services/getNewsData';

import LatestNews from '../component/home/LatestDisplay';

const Home = () => {
    const dispatch = useDispatch();

    const latestNewsList = useSelector(
        newsSelector.getLatestNews
    )

    useEffect(() => {
        dispatch(getLatestNews())
    },[])

    return (
        <>
            <LatestNews ldata={latestNewsList?.data}/>
        </>
    )
}

export default Home;