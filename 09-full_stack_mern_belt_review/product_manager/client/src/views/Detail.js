import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
        .then(res => setProduct(res.data[0])) // the zero index gets a single product
        // is this returns an array of product objects (even though said array only has one element..)
        .catch(err => console.error(err));
    }, []);
    
    // console.log(product)
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}
    
export default Detail;

