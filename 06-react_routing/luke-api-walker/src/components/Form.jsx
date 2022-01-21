import React, { useState } from 'react';
// import StarWarsDisplay from './Display';
// import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Form = (props) => {
    const [category, setCategory] = useState("people");
    const [id, setId] = useState(0);


    let history = useHistory();


    const makeApiCall = (e) => {
        e.preventDefault();
        console.log({ category, id })
        // if (id === ''){
        //     setId(0)
        // }
        // if (id !== '') {
        history.push(`/${category}/${id}`);
        // }
        // else {
        // history.push(`/${category}/0}`);
        // }
    }

    return (
        <div className="App p-2">
            <form onSubmit={makeApiCall} className="container d-flex flex-row justify-content-center align-items-center gap-3">
                <div className="form-group d-flex justify-content-center align-items-center gap-4">
                    <label className="d-flex">Search for:</label>
                    <select className="form-select" onChange={(e) => setCategory(e.target.value)} name="category" id="">
                        <option value="people">people</option>
                        <option value="planets">planets</option>
                    </select>
                </div>
                <div className="form-group d-flex justify-content-center align-items-center gap-4">
                    <label htmlFor="id">ID: </label>
                    <input className="form-control" type="number" onChange={(e) => setId(e.target.value)} name="id" id="" />
                    <input className="btn btn-primary" type="submit" value="Search" />
                </div>
            </form>
        </div>
    );
}


export default Form;