import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams, useHistory } from "react-router-dom";
import DeleteButton from '../components/DeleteButton';
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const history = useHistory();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
        .then(res => setProduct(res.data[0])) // the zero index gets a single product
        // is this returns an array of product objects (even though said array only has one element..)
        .catch(err => console.error(err));
    }, []);


    // const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res => {
                // removeFromDom(productId)
                console.log(res)
            })
            .catch(err => console.error(err))

            history.push('/products')
    }
    
    // console.log(product)
    return (
        <div className ="d-flex flex-column justify-content-center align-items-center gap-3 p-2">
            <h2>{product.title}</h2>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <div className = "d-flex align-items-center gap-3">
                <Link to={`/products/${product._id}/edit/`}><button className="btn btn-primary">Edit</button></Link>
                <DeleteButton productId={product._id}
                        successCallback={() => history.push("/products")}
                    />
                {/* <button className="btn btn-danger" onClick={(e) => { deleteProduct(product._id) }}>
                            Delete
                        </button> */}
            </div>
        </div>
    )
}
    
export default Detail;

