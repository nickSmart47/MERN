import React from 'react'
import axios from 'axios';
    
const ProductList = (props) => {
    return (
        <div>
            {props.products.map( (product, i) =>
                <p key={i}><a href={`/products/${product._id}`}>{product.title}</a> 
                {/* <br /> ${product.price}  */}
                {/* <br /> {product.description} */}
                </p>
            )}
        </div>
    )
}
    
export default ProductList;

