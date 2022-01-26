import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    })

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId))
    }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/products', product)
            .then(res => {
                setProducts([...products, res.data])
            })
            .catch(err => console.log("Error: ", err))
    }

    return (
        <div className="container d-flex flex-column ">
            <h1>Product Manager</h1>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice={0} initialDescription="" />
            <hr />
            <h2>All Products:</h2>
            {loaded && <ProductList products={products} removeFromDom={removeFromDom} />}
        </div>
    )

}

export default Main;




