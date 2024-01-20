import React,{useState,useEffect} from 'react';
import './category.css';
import {Link } from 'react-router-dom'

let url = process.env.REACT_APP_BASE_URL;

const Category = () => {

    const [category,setCategory] = useState([])

    useEffect(()=>{
        fetch(`${url}/category`,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            console.log(data)
            setCategory(data)
        })
    },[])

    const renderCategory = category.map((item) => {
        return(
            <div className="row" key={item.id}>    
                <br/>
                <div className="col-md-2 col-sm-3 text-center">
                    <img alt="" src={item.thumb}
                    style={{width:'100px',height:'100px'}} 
                    class="img-circle"/>
                </div>
                <div className="col-md-10 col-sm-9">
                <h3>{item.category}</h3>
                <div className="row">
                    <div className="col-xs-9">
                        <h4>
                            <Link to={`/products?catId=${item.id}`}>Details</Link>
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
                        <h1>Category Page
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
                                {renderCategory}
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

export default Category;