import React from 'react';
import Box from './Box'


const BoxDisplay = (props) => {
    if (props.boxes) {
        return (
            <ul className= "list-inline mt-2">
                {props.boxes.map((box, i) =>
                    <li className="list-inline-item" key={i}><Box box = {box}></Box></li>)}
            </ul>

        )
    }
    else{
        return(
            <Box></Box>
                )
    }
}








export default BoxDisplay;