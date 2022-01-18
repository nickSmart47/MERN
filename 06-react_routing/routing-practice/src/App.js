import './App.css';
import { BrowserRouter, Link, Switch, Route, useParams } from 'react-router-dom';
import WordOrNumber from './components/RoutingPractice'


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
