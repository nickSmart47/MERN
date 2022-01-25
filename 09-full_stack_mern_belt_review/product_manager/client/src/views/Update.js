import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const history = useHistory();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
        .then(res => {
            // console.log(res.data)
            setTitle(res.data[0].title);
            setPrice(res.data[0].price);
            setDescription(res.data[0].description);
        })
        
    }, []);
    
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
            history.push('/products')

    }
    
    return (
        <div className="container d-flex flex-column gap- mt-2 justify-content-center align-items-center">
            <h1>Update Product</h1>
            <form className = ""onSubmit={updateProduct}>
                <div className="d-flex justify-content-center align-items-center gap-3 form-group border border-secondary p-2 bg-light">
                    <label >Title: </label>
                    <input type="text" value = {title} onChange={e=>setTitle(e.target.value)}/>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3 form-group border border-secondary p-2 bg-light mt-2">
                    <label >Price: </label>
                    <input type="number" value = {price}onChange={e=>setPrice(e.target.value)} />
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3 form-group border border-secondary p-2 bg-light mt-2">
                    <label >Description: </label>
                    <input type="text" value = {description} onChange={e=>setDescription(e.target.value)} />
                </div>
                <div className="form-group d-flex justify-content-center align-items-center mt-2">
                    <input className ="btn btn-primary"type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}
    
export default Update;

