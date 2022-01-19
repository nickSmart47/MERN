import React, { useState, useEffect } from 'react';
import StarWarsDisplay from './Display';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Form = (props) => {
    const [category, setCategory] = useState("people");
    const [id, setId] = useState(0);
    let [showDisplay, setShowDisplay] = useState(false);
    // let [information, setInformation] = useState({});

    let history = useHistory();

    // const toggleShowDisplay = () => {
    //     if (showDisplay) {
    //         setShowDisplay(false);
    //     }
    //     else {
    //         setShowDisplay(true);
    //     }
    // }

    const makeApiCall = (e) => {
        setShowDisplay(true);
        // e.preventDefault();

        history.push(`/${category}/${id}`);
        // console.log(history)

        // axios.get('https://swapi.dev/api/people/1').then(response => { setInformation(response) }, [])
        // .catch(err =>{
        //     console.log("error!!--->", err)
        // })
    }

    return (
        <div className="App p-2">
            <form onSubmit={makeApiCall} className="container d-flex justify-content-center align-items-center gap-3">
                <p className="mt-2">Search for:</p>
                <select onChange={(e) => setCategory(e.target.value)} name="category" id="">
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                </select>
                <label htmlFor="id">ID: </label>
                <input type="number" onChange={(e) => setId(e.target.value)} name="id" id="" />
                <input type="submit" value="Search" />
            </form>
        </div>
    );
}


export default Form;