import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';



function NewPetForm(props) {

    let [name, setName] = useState("");
    let [type, setType] = useState("");
    let [description, setDescription] = useState("");
    let [skillOne, setSkillOne] = useState("");
    let [skillTwo, setSkillTwo] = useState("");
    let [skillThree, setSkillThree] = useState("");

    let [nameTakenError, setNameTakenError] = useState("");

    let [formErrors, setFormErrors] = useState({});

    const history = useHistory();

    const createPetSubmitHandler = (e) => {
        e.preventDefault();

        let formInfoObj = {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree
        }

        axios.post("http://localhost:8000/api/things", formInfoObj)
            .then(res => {
                console.log('response post post request(lol)', res)
                
                if (res.data.errors) {
                    setFormErrors(res.data.errors)
                }
                // else if (res.data.keyValue){
                //     console.log(res.data.keyValue.name)
                //     // setFormErrors(res.data.keyValue.name)
                //     let takenName = res.data.keyValue.name
                //     // console.log(takenName)
                //     setNameTakenError(`${takenName} is already in our shelter`)
                //     // console.log(nameTakenError)
                // }
                else {
                    // props.setNewPetAdded(!props.newPetAdded)
                    history.push('/')
                }
            })
            .catch(err => console.log("post request error", err))
    }

    return (<div>
        <div className="d-flex flex-column container">
            <div className="d-flex justify-content-around align-items-center">
                <h1>Pet Shelter</h1>
                <Link to="/">back to home</Link>
            </div>
            <h5>Know a pet needing a home? </h5>
        </div>

        <form onSubmit={createPetSubmitHandler} className="d-flex container border border-dark p-3">
            <div className="container m-2">
                <div className="form-group d-flex flex-column">
                    <label>Pet Name:</label>
                    <input onChange={(e) => { setName(e.target.value) }} type="text" />
                    <p className="text-danger">{formErrors.name ? formErrors.name.message : ""} {nameTakenError}</p>
                </div>
                <div className="form-group d-flex flex-column">
                    <label>Pet Type:</label>
                    <input onChange={(e) => { setType(e.target.value) }} type="text" />
                    <p className="text-danger">{formErrors.type ? formErrors.type.message : ""}</p>
                </div>
                <div className="form-group d-flex flex-column">
                    <label>Pet Description:</label>
                    <input onChange={(e) => { setDescription(e.target.value) }} type="text" />
                    <p className="text-danger">{formErrors.description ? formErrors.description.message : ""}</p>
                </div>
                <div className="d-flex gap-5 justify-content-center mt-2">
                    <input type="submit" className="btn btn-success" value="Add Pet" />
                </div>
            </div>
            <div className="d-flex flex-column m-1">
                <h5>Skills: (optional)</h5>
                <div className="form-group d-flex flex-column">
                    <label>Skill 1:</label>
                    <input type="text" onChange={(e) => { setSkillOne(e.target.value) }} />
                </div>
                <div className="form-group d-flex flex-column">
                    <label>Skill 2:</label>
                    <input type="text" onChange={(e) => { setSkillTwo(e.target.value) }} />
                </div>
                <div className="form-group d-flex flex-column">
                    <label>Skill 3:</label>
                    <input type="text" onChange={(e) => { setSkillThree(e.target.value) }}/>
                </div>
            </div>

        </form>
    </div>
    );

}


export default NewPetForm;
