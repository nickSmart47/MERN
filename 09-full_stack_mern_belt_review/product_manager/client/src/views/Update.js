import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';

const Update = (props) => {
    const { id } = useParams();

    /* old way
    // const { id } = props;
    // const [title, setTitle] = useState('');
    // const [price, setPrice] = useState(0);
    // const [description, setDescription] = useState('');
    */

    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    const history = useHistory();


    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {

                /* old way
                // console.log(res.data)
                // setTitle(res.data[0].title);
                // setPrice(res.data[0].price);
                // setDescription(res.data[0].description);
                */
                setProduct(res.data)
                setLoaded(true)
            })

    }, []);

    const updateProduct = product => {
        // e.preventDefault();

        axios.put('http://localhost:8000/api/products/' + id, product)
            .then(res => console.log(res))
            .catch(err => console.error(err));
        history.push('/products')

    }

    return (
        <div>
            <h1>Update a Product</h1>
            {loaded && (
                <>
                    <ProductForm
                        onSubmitProp={updateProduct}
                        initialTitle={product[0].title}
                        initialPrice={product[0].price}
                        initialDescription={product[0].description}
                    />

                    <DeleteButton productId={product[0]._id}
                        successCallback={() => history.push('/products')}
                    />
                </>
            )}
        </div>
    )


}

export default Update;


//old way below, basically recreated the productForm...

// <div className="container d-flex flex-column gap- mt-2 justify-content-center align-items-center">
//     <h1>Update Product</h1>
//     <form className = ""onSubmit={updateProduct}>
//         <div className="d-flex justify-content-center align-items-center gap-3 form-group border border-secondary p-2 bg-light">
//             <label >Title: </label>
//             <input type="text" value = {title} onChange={e=>setTitle(e.target.value)}/>
//         </div>
//         <div className="d-flex justify-content-center align-items-center gap-3 form-group border border-secondary p-2 bg-light mt-2">
//             <label >Price: </label>
//             <input type="number" value = {price}onChange={e=>setPrice(e.target.value)} />
//         </div>
//         <div className="d-flex justify-content-center align-items-center gap-3 form-group border border-secondary p-2 bg-light mt-2">
//             <label >Description: </label>
//             <input type="text" value = {description} onChange={e=>setDescription(e.target.value)} />
//         </div>
//         <div className="form-group d-flex justify-content-center align-items-center mt-2">
//             <input className ="btn btn-primary"type="submit" value="Submit" />
//         </div>
//     </form>
// </div>