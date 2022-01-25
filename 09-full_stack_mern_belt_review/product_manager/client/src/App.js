import './App.css';
import Main from './views/Main'
import Detail from './views/Detail'
import { BrowserRouter, Switch, Route, Routes, Router } from 'react-router-dom';
import Update from './views/Update';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <Switch>
          <Route exact path="/products/">
            <Main />
          </Route>
          <Route exact path="/products/:id">
            <Detail />
          </Route>
          <Route exact path="/products/:id/edit">
            <Update />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
