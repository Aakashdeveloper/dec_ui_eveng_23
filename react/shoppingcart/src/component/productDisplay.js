import React from 'react';

const ProductDisplay = (props) => {

    const renderProduct = props.prodData.map((item) => {
        return(
            <div key={item.id}>
                <h3>{item.product_name} - {item.Color}</h3>
            </div>
        )
    })


    return(
      <>
      {renderProduct}
      </>
    )
}

export default ProductDisplay