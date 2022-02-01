import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PetList = (props) => {

    let [allPets, setAllPets] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/things/')
            .then(res => {
                console.log("getting all Pets, response here --->", res)
                setAllPets(res.data)
            })
            .catch(err => console.log("Error! Oh no!, here it is -->", err))
    }, [props.deleted])

    // console.log("props stuff here:", props)
    // 

    return (
        <>

            <div className="d-flex justify-content-around align-items-center container">
                <h1>Pet Shelter</h1>
                <Link to="/new">
                    <p>Add a Pet to the shelter</p>
                </Link>
            </div>
            <h5 className="m-4">These pets are looking for a good home </h5>
            <table className="table container">
                <thead >
                    <tr className="">
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>

                <tbody >
                    {allPets.map((pet, i) => {
                        return (
                            <tr key={i} className=" ">
                                <th scope="row">
                                    {pet.name}
                                </th>
                                <td>
                                    {pet.type}
                                </td>
                                <td className="">
                                    <Link to={`/pets/${pet._id}`}>
                                        <button className="btn btn-success">Details</button>
                                    </Link>
                                    &nbsp;&nbsp;|&nbsp;&nbsp;
                                    <Link to={`/pets/${pet._id}/edit`}><button className="btn btn-primary">Edit</button>
                                    </Link>
                                </td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>
        </>
    );
};

export default PetList;

