import React, {useState} from 'react';

import axios from 'axios';

export default props => {
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
        <form className = "d-flex flex-column gap-3 mt-2 justify-content-center align-items-center bg-light"onSubmit={onSubmitHandler}>
            <div className="d-flex gap-3 form-group border border-secondary p-2 bg-light">
                <label >Title: </label>
                <input type="text" onChange={e=>setTitle(e.target.value)} />
            </div>
            <div className="d-flex gap-3 form-group border border-secondary p-2 bg-light">
                <label >Price: </label>
                <input type="number" onChange={e=>setPrice(e.target.value)} />
            </div>
            <div className="d-flex gap-3 form-group border border-secondary p-2 bg-light">
                <label >Description: </label>
                <input type="text" onChange={e=>setDescription(e.target.value)} />
            </div>
            <div className="form-group">
                <input class ="btn btn-primary"type="submit" value="Submit" />
            </div>
        </form>
        )

}