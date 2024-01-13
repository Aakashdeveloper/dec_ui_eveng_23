import React,{useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './productDisplay';

const App = () => {

    const [title] = useState('React Search App')
    const [count,setCount] = useState(0);
    const [products] = useState([
        {
            "id": 1,
            "product_name": "Girls top",
            "category": "Fashion",
            "category_id": 1,
            "Price": 2000,
            "Size": "Small",
            "Image": "https://i.ibb.co/fHj5Tgc/download.jpg",
            "Color": "Maroon",
            "Brand": "Gucci"
        },
        {
            "id": 2,
            "product_name": "Girls top",
            "category": "Fashion",
            "category_id": 1,
            "Price": 1500,
            "Size": "Medium",
            "Image": "https://i.ibb.co/tsXyK5Y/images.jpg",
            "Color": "Blue",
            "Brand": "Westside"
        },
        {
            "id": 3,
            "product_name": "Girls top",
            "category": "Fashion",
            "category_id": 1,
            "Price": 2000,
            "Size": "Large",
            "Image": "https://i.ibb.co/NsVKKdd/images-1.jpg",
            "Color": "Pink",
            "Brand": "H&M"
        },
        {
            "id": 4,
            "product_name": "Girls top",
            "category": "Fashion",
            "category_id": 1,
            "Price": 500,
            "Size": "Medium",
            "Image": "https://i.ibb.co/5Fwh8ys/Blue.jpg",
            "Color": "Blue",
            "Brand": "H&M"
        },
        {
            "id": 5,
            "product_name": "Girls top",
            "category": "Fashion",
            "category_id": 1,
            "Price": 2500,
            "Size": "Large",
            "Image": "https://i.ibb.co/sbtyWMs/WHite.jpg",
            "Color": "White",
            "Brand": "Gucci"
        },
        {
            "id": 6,
            "product_name": "Jeans",
            "category": "Fashion",
            "category_id": 1,
            "Price": 2500,
            "Size": "XX",
            "Image": "https://i.ibb.co/wLD9LyL/mj7.jpg",
            "Color": "white",
            "Brand": "Wrangler"
        }
    ])


    const updateCount = () => {
        setCount(count+1)
    }

    console.log("render")

    return(
        <>
            <Header/>
            <h1>{title}</h1>
            <ProductDisplay prodData={products}/>
            <h2>Code {count}</h2>
            <button onClick={updateCount}>Counter</button>
            <Footer year="2024"/>
        </>
    )
}

export default App;