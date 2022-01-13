import React, { useState } from 'react';

const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    const createUser = (e) => {
        e.preventDefault();
        if ({ password } === { confirmPassword }) {
            const newUser = { firstName, lastName, email, password };
        }
        else {
            alert("Password and Confirm Password fields must match!")
        }
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2 && e.target.value !== "") {
            setFirstNameError("First Name must be at least two characters")
        }
        else {
            setFirstNameError("")}
    } 

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2 && e.target.value !== "") {
            setLastNameError("Last Name must be at least 2 characters")
        }
        else {
            setLastNameError("")}
    } 

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5 && e.target.value !== "") {
            setEmailError("Email must be at least 5 characters")
        }
        else {
            setEmailError("")}
    } 

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8 && e.target.value !== "") {
            setPasswordError("Password must be at least 8 characters")
        }
        else {
            setPasswordError("")}
    } 

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
        if (e.target.value != password && e.target.value !== "") {
            setConfirmPasswordError("Passwords must match.")
        }
        else {
            setConfirmPasswordError("")}
    }

    return (
        <div className = "w-50 mx-auto ">
            <div>
                <form onSubmit={createUser}>
                    <div className="form-group row p-2 bg-light rounded">
                        <label for className="col-sm-2 col-form-label" >First Name: </label>
                        <div className="div col-sm-10">
                            <input type="text" className="form-control m-2" onChange={ handleFirstName } />
                        </div>
                        {
                            firstNameError ?
                            <p>{ firstNameError }</p> :
                            ``
                        }
                    </div>
                    <div className="form-group row p-2 bg-light rounded mt-1">
                        <label for className="col-sm-2 col-form-label" >Last Name: </label>
                        <div className="div col-sm-10">
                            <input type="text" className="form-control m-2" onChange={ handleLastName } />
                        </div>
                        {
                            lastNameError ?
                            <p>{ lastNameError }</p> :
                            ``
                        }
                    </div>
                    <div className="form-group row p-2 bg-light rounded mt-1">
                        <label for className="col-sm-2 col-form-label" >Email: </label>
                        <div className="div col-sm-10">
                            <input type="email" className="form-control m-2" onChange={ handleEmail } />
                        </div>
                        {
                            emailError ?
                            <p>{ emailError }</p> :
                            ``
                        }
                    </div>
                    <div className="form-group row p-2 bg-light rounded mt-1">
                        <label for className="col-sm-2 col-form-label" >Password: </label>
                        <div className="div col-sm-10">
                            <input type="password" className="form-control m-2" onChange={ handlePassword } />
                        </div>
                        {
                            passwordError ?
                            <p>{ passwordError }</p> :
                            ``
                        }
                        {
                            confirmPasswordError ?
                            <p>{ confirmPasswordError }</p> :
                            ``
                        }
                    </div>
                    <div className="form-group row p-2 bg-light rounded mt-1">
                        <label for className="col-sm-2 col-form-label" >Confirm Password: </label>
                        <div className="div col-sm-10">
                            <input type="password" className="form-control m-2" onChange={ handleConfirmPassword } />
                        </div>
                    </div>
                </form>
            </div>
            {/* <div>
                <h2>Your Form Data</h2>
                <ul className="list-group">
                    <li className="list-group-item">First Name: {firstName} </li>
                    <li className="list-group-item">Last Name: {lastName} </li>
                    <li className="list-group-item">Email: {email} </li>
                    <li className="list-group-item">Password: {password}</li>
                    <li className="list-group-item">Confirm Password: {confirmPassword}</li>
                </ul>
            </div> */}
        </div>
    )
}



export default HookForm;