import React from 'react';
import { useParams } from 'react-router-dom';


const WordOrNumber = () => {
    const { wordOrNumber, textColor, backgroundColor } = useParams();
    console.log({ wordOrNumber, textColor, backgroundColor })
    if (isNaN(wordOrNumber)) {
        if (backgroundColor)
            return (
                <div style={{ backgroundColor: backgroundColor, color: textColor }}>
                    <h1>The word is: {wordOrNumber}</h1>
                </div>
            );
        else {
            console.log("GOT TO THE ESLSE")
            return (
                <div>
                    <h1>The word is: {wordOrNumber}</h1>
                </div>
            );
        }
    }
    else {
        console.log("WEGGOTHERESR")
        return (
            <h1>The number is: {wordOrNumber} </h1>
        )
    }
}

export default WordOrNumber;