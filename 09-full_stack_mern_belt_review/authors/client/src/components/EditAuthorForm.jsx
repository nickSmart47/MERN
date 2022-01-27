import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

function EditAuthorForm(props) {
    const { id } = useParams();

    let [authorInfo, setAuthorInfo] = useState({
        name: ""
    });

    let [formErrors, setFormErrors] = useState({});


    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log('whatup response here dawg', res)
                setAuthorInfo(res.data[0])
            })
            .catch(err => console.log(err))
    }, [])

    // console.log(authorInfo)


    const changeHandler = (e) => {
        // console.log("oh dang you're changing the form!!")
        setAuthorInfo({
            name: e.target.value
        })
        // console.log('new author info here', authorInfo)
    }

    const updateAuthorSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, authorInfo)
            .then(res=>{
                console.log("response after successful put request ihere", res)
                // if (res.data.error) {
                //     console.log('we got errors bro', res.data.error)
                //     // setFormErrors(res.data.errors)
                // }
                // else {
                    history.push('/')
                // }
            })
            .catch(err => {console.log("put request error here", err)
        }
            )

    }


    return (
        <div>
            <Link to="/">Home</Link>
            <h5>Edit this author: </h5>
            <form onSubmit={updateAuthorSubmitHandler}>
                <div className="form-group d-flex flex-column">
                    <label>Name:</label>
                    <input type="text" value={authorInfo.name} onChange={changeHandler}  />
                    <p className="text-danger">{formErrors.name ? formErrors.name.message : ""}</p>
                    <div className="d-flex gap-5 justify-content-center mt-2">
                        <Link to="/"><button className="btn btn-secondary">Cancel</button></Link>
                        <input type="submit" className="btn btn-success" value="Submit" />
                    </div>
                </div>
            </form>
        </div>
    );
}


export default EditAuthorForm;
