import React, { useState } from 'react';

const BoxGenerator = (props) => {
    const [box, setBox] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        // const box = e.target.value;
        props.onNewBox( box )
    } 
    return (
        <div>
            <form onSubmit = {handleSubmit}className = "d-flex justify-content-center align-items-center">
                <div className="form-group d-flex gap-2">
                    <label htmlFor="">Color</label>
                    <input type="text" onChange= { (e) => setBox(e.target.value)} value = { box } />
                    <input type="submit" value="Add" />
                </div>
            </form>
            <div>
                
            </div>
        </div>
    )
}

export default BoxGenerator;