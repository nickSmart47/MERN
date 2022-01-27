import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';



function NewAuthorForm(props) {

    let [name, setName] = useState("");

    let [formErrors, setFormErrors] = useState({});

    const history = useHistory();

    const createAuthorSubmitHandler = (e) => {
        e.preventDefault();

        let formInfoObj = { name }

        axios.post("http://localhost:8000/api/authors", formInfoObj)
            .then(res => {
                console.log('response post post request(lol)', res)

                if (res.data.errors) {
                    setFormErrors(res.data.errors)
                }
                else {
                    // props.setNewAuthorAdded(!props.newAuthorAdded)
                    history.push('/')
                }
            })
            .catch(err => console.log("post request error", err))
    }

    return (<div>
        <Link to="/">Home</Link>
        <h5>Add a new author: </h5>
        <form onSubmit={createAuthorSubmitHandler}>
            <div className="form-group d-flex flex-column">
                <label>Name:</label>
                <input onChange={(e) => { setName(e.target.value) }} type="text" />
                <p className="text-danger">{formErrors.name ? formErrors.name.message : ""}</p>
                <div className="d-flex gap-5 justify-content-center mt-2">
                    <Link to ="/"><button className="btn btn-secondary">Cancel</button></Link>
                    <input type="submit" className="btn btn-success" value="Submit" />
                </div>
            </div>
        </form>
    </div>
    );

}


export default NewAuthorForm;
