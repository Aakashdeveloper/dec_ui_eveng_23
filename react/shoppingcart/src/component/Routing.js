import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CategoryDisplay from './categoryDisplay';
import ProductDisplay from './productDisplay';
import Main from './main';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<CategoryDisplay/>}/>
                    <Route path="products" element={<ProductDisplay/>}/>
                </Route>
            </Routes>
            <Footer year="2024"/>
        </BrowserRouter>
    )
}

export default Routing;