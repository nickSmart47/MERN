import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import PetList from './components/PetList';
import NewPetForm from './components/NewPetForm';
import PetDetail from './components/PetDetail';
import PetEditForm from './components/PetEditForm';
import React, { useState } from 'react';

function App() {
  let [deleted, setDeleted] = useState(false)

  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <PetList deleted={deleted} />
        </Route>
        <Route exact path="/new">
          <NewPetForm />
        </Route>
        <Route exact path="/pets/:id">
          <PetDetail deleted={deleted} setDeleted={setDeleted} />
        </Route>
        <Route exact path="/pets/:id/edit">
          < PetEditForm />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
