import React, { useState } from 'react';

const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        if ({ password } === { confirmPassword }) {
            const newUser = { firstName, lastName, email, password };
        }
        else {
            alert("Password and Confirm Password fields must match!")
        }
    };

    return (
        <div className = "d-flex flex-column justify-content-center align-items-center gap-2">
            <div>
                <form onSubmit={createUser}>
                    <div className="form-group row p-2 bg-light rounded">
                        <label for className="col-sm-2 col-form-label" >First Name: </label>
                        <div className="div col-sm-10">
                            <input type="text" className="form-control m-2" onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group row p-2 bg-light rounded mt-1">
                        <label for className="col-sm-2 col-form-label" >Last Name: </label>
                        <div className="div col-sm-10">
                            <input type="text" className="form-control m-2" onChange={(e) => setLastName(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group row p-2 bg-light rounded mt-1">
                        <label for className="col-sm-2 col-form-label" >Email: </label>
                        <div className="div col-sm-10">
                            <input type="email" className="form-control m-2" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group row p-2 bg-light rounded mt-1">
                        <label for className="col-sm-2 col-form-label" >Password: </label>
                        <div className="div col-sm-10">
                            <input type="password" className="form-control m-2" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group row p-2 bg-light rounded mt-1">
                        <label for className="col-sm-2 col-form-label" >Confirm Password: </label>
                        <div className="div col-sm-10">
                            <input type="password" className="form-control m-2" onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <h2>Your Form Data</h2>
                {/* <p>First Name: {firstName} </p>
                <p>Last Name: {lastName} </p>
                <p>Email: {email} </p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p> */}
                <ul className="list-group">
                    <li className="list-group-item">First Name: {firstName} </li>
                    <li className="list-group-item">Last Name: {lastName} </li>
                    <li className="list-group-item">Email: {email} </li>
                    <li className="list-group-item">Password: {password}</li>
                    <li className="list-group-item">Confirm Password: {confirmPassword}</li>
                </ul>
            </div>
        </div>
    )
}



export default HookForm;