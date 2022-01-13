import './App.css';
import BoxGenerator from './components/BoxGenerator';
import BoxDisplay from './components/BoxDisplay';
import Box from './components/Box'
import { useState } from 'react';

function App() {
  const [boxes, setBoxes] = useState("")

  const createNewBox = (newBox) => {
    setBoxes(boxes => [...boxes, newBox]);
    // boxes.push( newBox )
    console.log(boxes)
    // console.log(typeof(boxes))
  }

  return (
    <div className="App">
      <h1>Box Generator</h1>
      <BoxGenerator onNewBox={createNewBox}></BoxGenerator>
      {/* boxes.map( createNewBox )  */}
      {/* <Box box = {boxes}></Box> */}
      <BoxDisplay boxes={boxes}></BoxDisplay>
    </div>
  );
}

export default App;
