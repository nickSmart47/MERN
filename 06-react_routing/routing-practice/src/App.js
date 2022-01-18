import './App.css';
import { BrowserRouter, Link, Switch, Route, useParams } from 'react-router-dom';
// import WordOrNumber from './components/RoutingPractice'

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
    else{
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



function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <Switch>
          <Route path="/home">
            <h1>Welcome</h1>
          </Route>
          <Route path="/:wordOrNumber/:textColor/:backgroundColor">
            <WordOrNumber></WordOrNumber>
          </Route>
          <Route path="/:wordOrNumber">
            <WordOrNumber></WordOrNumber>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
