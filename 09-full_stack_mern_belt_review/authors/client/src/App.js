import './App.css';
import AuthorList from './components/AuthorList';
import NewAuthorForm from './components/NewAuthorForm';
import EditAuthorForm from './components/EditAuthorForm';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Favorite Authors</h1>

        <Route exact path="/">
          <AuthorList />
        </Route>
        <Route exact path='/new'>
          <NewAuthorForm />
        </Route>
        <Route exact path='/edit/:id'>
          <EditAuthorForm/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
