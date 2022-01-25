import logo from './logo.svg';
import './App.css';
import Main from './views/Main'
import Detail from './views/Detail'
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="products/" element={<Main />} />
          <Route path="products/:id" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
