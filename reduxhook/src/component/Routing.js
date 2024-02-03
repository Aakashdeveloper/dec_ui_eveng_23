import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../container/Home';
import Main from './main';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Home/>}/>
                </Route>
            </Routes>
            <Footer year="2024"/>
        </BrowserRouter>
    )
}

export default Routing;