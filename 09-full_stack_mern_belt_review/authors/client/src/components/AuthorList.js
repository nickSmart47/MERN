import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AuthorList = (props) => {

    let [allAuthors, setAllAuthors] = useState([]);
    let [deleted, setDeleted] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/')
            .then(res => {
                console.log("getting all authors, response here --->", res)
                setAllAuthors(res.data)
            })
            .catch(err => console.log("Error! Oh no!, here it is -->", err))
    }, [deleted])

    // console.log("here are the authors", allAuthors)

    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then(res => {
                console.log("deletion response here -->>", res);
                setDeleted(!deleted);
            })
            .catch(err => console.log("oh no, it's an error...", err))
    }

    return (
        <>
            <Link to="/new">
                <p>Add an author</p>
            </Link>
            <h5>We have quotes by: </h5>
            <table class="table">
                <thead>
                    <tr className="d-flex justify-content-center gap-5">
                        <th scope="col">Author</th>
                        <th scope="col">Actions available</th>
                    </tr>
                </thead>

                {allAuthors.map((author, i) => {
                    return (
                        <tbody>
                            <tr key={i} className="d-flex justify-content-center gap-5">
                                <th scope="row">{author.name}</th>
                                <td className="d-flex gap-3"><Link to={`/edit/${author._id}`}><button className="btn btn-primary">Edit</button></Link>
                                    <button onClick={() => deleteAuthor(author._id)} className="btn btn-danger">Delete</button></td>
                            </tr>

                        </tbody>
                    )
                })}
            </table>
        </>
    );
};

export default AuthorList;

