import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import StarWarsDisplay from './components/Display';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App p-2">
      <BrowserRouter>
      <Form />
      <Switch>
        <Route path="/:category/:id">
          <StarWarsDisplay></StarWarsDisplay>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
