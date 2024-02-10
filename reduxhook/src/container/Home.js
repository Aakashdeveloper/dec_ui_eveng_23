import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {newsSelector} from '../redux/newsData';
import {
    getLatestNews,
    getArticleNews,
    getGalleryNews
} from '../services/getNewsData';

import LatestNews from '../component/home/LatestDisplay';
import ArticleNews from '../component/home/ArticleDisplay';
import GalleryNews from '../component/home/GalleryDisplay';

const Home = () => {
    const dispatch = useDispatch();

    const latestNewsList = useSelector(
        newsSelector.getLatestNews
    )

    const articleNewsList = useSelector(
        newsSelector.getArticleNews
    )

    const galleryNewsList = useSelector(
        newsSelector.getGalleryNews
    )


    useEffect(() => {
        dispatch(getLatestNews())
        dispatch(getArticleNews())
        dispatch(getGalleryNews())
    },[])

    return (
        <>
            <LatestNews ldata={latestNewsList?.data}/>
            <ArticleNews adata={articleNewsList?.data}/>
            <GalleryNews gdata={galleryNewsList?.data}/>
        </>
    )
}

export default Home;