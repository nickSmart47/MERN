import React from 'react';
    
    
const Box = (props) => {
    console.log(props.box)
    if(props.box){
        return (
            <div style={{backgroundColor: props.box.boxColor, width: props.box.boxWidth + 'px', height: props.box.boxHeight + 'px'}}>
            </div>
        );
    }
    else{
        return(
            <div></div>)
    }
};
    
export default Box;