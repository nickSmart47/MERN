import React, { useState } from 'react';

const BoxGenerator = (props) => {
    const [boxColor, setBoxColor] = useState("")
    const [boxWidth, setBoxWidth] = useState("")
    const [boxHeight, setBoxHeight] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewBox({boxColor,boxWidth,boxHeight})
        // console.log(props.boxes)
        setBoxColor("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center">
                <div className="form-group d-flex gap-2">
                    <label htmlFor="">Color</label>
                    <input type="text" onChange={(e) => setBoxColor(e.target.value)} value={boxColor} />
                    <label htmlFor="">Width</label>
                    <input type="number" onChange={(e) => setBoxWidth(e.target.value)} value={boxWidth.toString()} />
                    <label htmlFor="">Height</label>
                    <input type="number" onChange={(e) => setBoxHeight(e.target.value)} value={boxHeight.toString()} />
                    <input type="submit" value="Add" />
                </div>
            </form>
            <div>

            </div>
        </div>
    )
}

export default BoxGenerator;