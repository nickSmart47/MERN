import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err))
    }



    return (
        <div>
            {props.products.map((product, i) =>
                <div key={i}>
                    <p>{product.title}</p>
                        <Link to={`/products/${product._id}`}>
                            <button className="btn btn-secondary m-2">
                                Details
                            </button>
                        </Link>
                        <button className="btn btn-danger m-2" onClick={(e) => { deleteProduct(product._id) }}>
                            Delete
                        </button>
                </div>
            )}
        </div>
    )
}

export default ProductList;

