import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';

let url = process.env.REACT_APP_BASE_URL;

const InsertProduct = () => {

    let navigate = useNavigate();

    const initialValues = {
        "id": Math.floor(Math.random()*100000),
        "product_name": "a",
        "category": "b",
        "category_id": 1,
        "Price": 10,
        "Size": "c",
        "Image": "d",
        "Color": "e",
        "Brand": "f"
    }

    const [values,setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }

    const checkout = () => {
        let final = values
        final.category_id = parseFloat(values.category_id)
        console.log(final)
        fetch(`${url}/addProducts`,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
        .then(navigate('/'))
    }

    return(
        <>
            <div className='container'>
                <hr/>
                <div className='panel panel-primary'>
                    <div className='panel-heading'>
                        <h3>Add Products</h3>
                    </div>
                    <div className='panel-body'>
                        <div className='row'>
                        <div className='col-md-6 form-group'>
                                <label className="control-label">Id</label>
                                <input className="form-control" id="product_name"
                                name="product_name" value={values.id} 
                                readOnly/>
                            </div>
                            <div className='col-md-6 form-group'>
                                <label className="control-label">Name</label>
                                <input className="form-control" id="product_name"
                                name="product_name" value={values.product_name} onChange={handleInputChange}/>
                            </div>
                            <div className='col-md-6 form-group'>
                                <label className="control-label">Category</label>
                                <input className="form-control" id="category"
                                name="category" value={values.category} onChange={handleInputChange}/>
                            </div>
                            <div className='col-md-6 form-group'>
                                <label className="control-label">Category_id</label>
                                <select name="category_id" onChange={handleInputChange}
                                className="form-control">
                                    <option value="1">Fashion</option>
                                    <option value="2">Electronics</option>
                                    <option value="3">Essentials</option>
                                    <option value="4">Footwear</option>
                                </select>
                               
                            </div>
                            <div className='col-md-6 form-group'>
                                <label className="control-label">Price</label>
                                <input className="form-control" id="Price"
                                name="Price" value={values.Price} onChange={handleInputChange}/>
                            </div>
                            <div className='col-md-6 form-group'>
                                <label className="control-label">Size</label>
                                <input className="form-control" id="Size"
                                name="Size" value={values.Size} onChange={handleInputChange}/>
                            </div>
                            <div className='col-md-6 form-group'>
                                <label className="control-label">Image</label>
                                <input className="form-control" id="Image"
                                name="Image" value={values.Image} onChange={handleInputChange}/>
                            </div>
                            <div className='col-md-6 form-group'>
                                <label className="control-label">Color</label>
                                <input className="form-control" id="Color"
                                name="Color" value={values.Color} onChange={handleInputChange}/>
                            </div>
                            <div className='col-md-6 form-group'>
                                <label className="control-label">Brand</label>
                                <input className="form-control" id="Brand"
                                name="Brand" value={values.Brand} onChange={handleInputChange}/>
                            </div>
                            <button className='btn btn-success' onClick={checkout}>Submit</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
        
    )
}


export default InsertProduct