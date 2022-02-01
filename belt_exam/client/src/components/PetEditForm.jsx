import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

function EditPetForm(props) {
    const { id } = useParams();

    let [petInfo, setPetInfo] = useState({
        name: "",
        type: "",
        description: "",
        skillOne: "",
        skillTwo: "",
        skillThree: "",

    });

    let [formErrors, setFormErrors] = useState({});


    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/things/${id}`)
            .then(res => {
                console.log('whatup response here dawg', res)
                setPetInfo(res.data[0])
            })
            .catch(err => console.log(err))
    }, [])

    // console.log(petInfo)


    const changeHandler = (e) => {
        // console.log("oh dang you're changing the form!!")
        setPetInfo({
            ...petInfo,
            [e.target.name]: e.target.value
        })
        // console.log('new pet info here', petInfo)
    }

    const updatePetSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/things/${id}`, petInfo)
            .then(res => {
                console.log("response after successful put request here", res)
                if (res.data.errors) {
                    console.log('we got errors bro', res.data.errors)
                    setFormErrors(res.data.errors)
                }
                else {
                    history.push('/')
                }
            })
            .catch(err => {
                console.log("put request error here", err)
            }
            )

    }


    return (
        <div>
            <div className="d-flex flex-column container">
                <div className="d-flex justify-content-around align-items-center">
                    <h1>Pet Shelter</h1>
                    <Link to="/">back to home</Link>
                </div>
                <h5>Edit {petInfo.name} </h5>
            </div>
            <form onSubmit={updatePetSubmitHandler} className="d-flex container border border-dark p-3">
                <div className="container m-2">
                    <div className="form-group d-flex flex-column">
                        <label>Pet Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={petInfo.name}
                            onChange={changeHandler} />
                        <p className="text-danger">{formErrors.name ? formErrors.name.message : ""}</p>
                    </div>
                    <div className="form-group d-flex flex-column">
                        <label>Pet Type:</label>
                        <input
                            name="type"
                            value={petInfo.type}
                            onChange={changeHandler}
                            type="text" />
                        <p className="text-danger">{formErrors.type ? formErrors.type.message : ""}</p>
                    </div>
                    <div className="form-group d-flex flex-column">
                        <label>Pet Description:</label>
                        <input
                            name="description"
                            value={petInfo.description}
                            onChange={changeHandler}
                            type="text" />
                        <p className="text-danger">{formErrors.description ? formErrors.description.message : ""}</p>
                    </div>
                    <div className="d-flex gap-5 justify-content-center mt-2">
                        <input type="submit" className="btn btn-success" value="Edit Pet" />
                    </div>
                </div>
                <div className="d-flex flex-column m-1">
                    <h5>Skills: (optional)</h5>
                    <div className="form-group d-flex flex-column">
                        <label>Skill 1:</label>
                        <input
                            name="skillOne"
                            type="text"
                            value={petInfo.skillOne}
                            onChange={changeHandler} />
                    </div>
                    <div className="form-group d-flex flex-column">
                        <label>Skill 2:</label>
                        <input
                            name="skillTwo"
                            type="text"
                            value={petInfo.skillTwo}
                            onChange={changeHandler} />
                    </div>
                    <div className="form-group d-flex flex-column">
                        <label>Skill 3:</label>
                        <input
                            name="skillThree"
                            type="text"
                            value={petInfo.skillThree}
                            onChange={changeHandler} />
                    </div>
                </div>

            </form>
        </div>
    );
}


export default EditPetForm;
