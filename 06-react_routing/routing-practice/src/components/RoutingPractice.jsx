import React from 'react';
import { useParams } from 'react-router-dom';


const WordOrNumber = (props) => {
    // console.log(props)
    const { wordOrNumber, textColor, backgroundColor } = useParams();
    console.log({ wordOrNumber, textColor, backgroundColor })
    // console.log(useParams())
    if (isNaN(wordOrNumber)) {
        return (
            <div style={{ backgroundColor: backgroundColor, color: textColor }}>
                <h1>{wordOrNumber}</h1>
            </div>
        );
    }
    else {
        // const { number } = useParams();
        return (
            <h1>The number is: {wordOrNumber} </h1>
        )
    }
}

export default WordOrNumber;