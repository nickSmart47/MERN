import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
    
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
        <div className ="d-flex flex-column justify-content-center align-items-center gap-3 p-2">
            <h2>{product.title}</h2>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <Link to={`/products/${product._id}/edit/`}><button className="btn btn-primary">Edit</button></Link>
        </div>
    )
}
    
export default Detail;

