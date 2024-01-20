import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';


let url = process.env.REACT_APP_BASE_URL;

const ProductByCat = () => {
    let params = useParams();
    console.log(params.catId)

    const [products,setProducts] = useState([]);

    useEffect(() => {
        axios.get(`${url}/product/${params.catId}`)
        .then((res) => {setProducts(res.data)})
    },[])


    const renderProducts = products.map((item) => {
        return(
            <div className="row" key={item.id}>    
            <br/>
            <div className="col-md-2 col-sm-3 text-center">
                <img alt="" src={item.Image}
                style={{width:'100px',height:'100px'}} 
                class="img-circle"/>
            </div>
            <div className="col-md-10 col-sm-9">
            <h3>{item.product_name}</h3>
            <div className="row">
                <div className="col-xs-9">
                    <h4>
                        <span>{item.Brand?item.Brand:item.company}</span>
                    </h4>
                    <h4>
                        <span>Rs. {item.Price}</span>
                    </h4>
                </div>
                <div className="col-xs-3"></div>
            </div>
            <br/><br/>
            </div>
        </div>
        )
    })


    return(
      <>
         <div id="masthead">  
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h1>Products Page
                        <p className="lead"></p>
                        </h1>
                    </div>
                </div> 
            </div>
            <div className="container">
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12"> 
                        <div className="panel">
                            <div className="panel-body">
                                {renderProducts}
                                <hr/>   
                            </div>                                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}

export default ProductByCat;