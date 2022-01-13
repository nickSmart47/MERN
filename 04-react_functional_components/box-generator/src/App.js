import './App.css';
import BoxGenerator from './components/BoxGenerator';
import BoxDisplay from './components/BoxDisplay';
import { useState } from 'react';

function App() {
  const [boxes, setBoxes] = useState("")

  const createNewBox = (newBox) => {
    setBoxes(boxes => [...boxes, newBox]);
    console.log(boxes)
  }

  return (
    <div className="App">
      <h1>Box Generator</h1>
      <BoxGenerator onNewBox={createNewBox}></BoxGenerator>
      <BoxDisplay boxes={boxes}></BoxDisplay>
    </div>
  );
}

export default App;
