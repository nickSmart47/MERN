import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams, useHistory } from "react-router-dom";

const PetDetail = (props) => {
    const [pet, setPet] = useState({})
    const { id } = useParams();
    const history = useHistory();

    const [likes, setLikes] = useState(0);
    // console.log ("pet likes here", likes)

    let [buttonDisabled, setButtonDisabled] = useState(false)

    const likeHandler = () => {
        setButtonDisabled(!buttonDisabled)
        let newLikeCount = pet.likes + 1
        setLikes(newLikeCount)
        let petInfo  = {
            name: pet.name,
            type: pet.type,
            description: pet.description,
            skillOne: pet.skillOne,
            skillTwo: pet.skillTwo,
            skillThree: pet.skillThree,
            likes: newLikeCount
        }
        axios.put(`http://localhost:8000/api/things/${id}`, petInfo)
            .then(res => {
                console.log("response after successful put request here", res)
                if (res.data.errors) {
                    console.log('we got errors bro', res.data.errors)
                }
                else {
                    history.push(`/pets/${id}`)
                }
            })
            .catch(err => {
                console.log("put request error here", err)
            }
            )
    }


    useEffect(() => {
        axios.get('http://localhost:8000/api/things/' + id)
            .then(res => {
                setPet(res.data[0])
            setLikes(res.data[0].likes)}) // the zero index gets a single pet
            //this returns an array of pet objects (even though said array only has one element..)
            .catch(err => console.error(err));
    }, []);


    // console.log("props stuff here:", props)

    // const { removeFromDom } = props;

    const deletePet = (petId) => {
        axios.delete(`http://localhost:8000/api/things/${petId}`)
            .then(res => {
                // removeFromDom(!true)
                // props.deleted = !props.deleted;
                props.setDeleted(!props.deleted)
                // console.log(props.setdeleted)
                // console.log(res)
            })
            .catch(err => console.error(err))

        history.push('/')
    }

    return (
        <div className="container">
            <div className="d-flex flex-column container">
                <div className="d-flex justify-content-around align-items-center">
                    <h1>Pet Shelter</h1>
                    <Link to="/">back to home</Link>
                </div>
                <div className="m-3 d-flex justify-content-around align-items-center">
                    <h5>Details about: {pet.name} </h5>
                    <button className="btn btn-warning" onClick={(e) => { deletePet(pet._id) }}>
                        Adopt {pet.name}
                    </button>
                </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center gap-3 p-2 border border-secondary">
                <div className="d-flex flex-column gap-3">
                    <p><strong>Pet type:</strong> {pet.type}</p>
                    <p><strong>Description:</strong> {pet.description}</p>
                    <div className="d-flex">
                        <p><strong>Skills:</strong></p>
                        <ul className="list-group-flush">
                            <li className="list-group-item">{pet.skillOne} </li>
                            <li className="list-group-item">{pet.skillTwo}</li>
                            <li className="list-group-item">{pet.skillThree}</li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-center gap-3">
                    <button disabled={buttonDisabled} onClick={likeHandler} className="btn btn-primary">Like {pet.name}
                    </button>
                    <p className="mt-2">{likes} like(s)</p>
                </div>
            </div>
        </div>
    )
}

export default PetDetail;

