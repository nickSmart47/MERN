import React, {useState} from 'react';

import axios from 'axios';

const ProductForm = props => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res=>console.log("Response: ", res))
            .catch(err=>console.log("Error: ", err ))
    }

    return(
        <div className="container d-flex flex-column gap- mt-2 justify-content-center align-items-center">
            <form className = ""onSubmit={onSubmitHandler}>
                <div className="d-flex justify-content-center align-items-center gap-3 form-group border border-secondary p-2 bg-light">
                    <label >Title: </label>
                    <input type="text" onChange={e=>setTitle(e.target.value)} />
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3 form-group border border-secondary p-2 bg-light mt-2">
                    <label >Price: </label>
                    <input type="number" onChange={e=>setPrice(e.target.value)} />
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3 form-group border border-secondary p-2 bg-light mt-2">
                    <label >Description: </label>
                    <input type="text" onChange={e=>setDescription(e.target.value)} />
                </div>
                <div className="form-group d-flex justify-content-center align-items-center mt-2">
                    <input className ="btn btn-success"type="submit" value="Submit" />
                </div>
            </form>
        </div>
        )

}

export default ProductForm;