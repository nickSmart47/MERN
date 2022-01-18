import './App.css';
import PokemonDisplay from './components/PokemonDisplay'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);
  let [showPokemon, setShowPokemon] = useState(false)

  // old way
  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokemon?limit=807/')
  //     .then(response => response.json())
  //     .then(response => setPokemon(response.results))
  // }, []);

  // new way using axios
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807/').then(response => { setPokemon(response.data.results) }, [])
  })


  const toggleShowPokemon = () => {
    if (showPokemon) {
      setShowPokemon(false);
    }
    else {
      setShowPokemon(true);

    }
  }
  return (
    <div className="App container">
      <button onClick={toggleShowPokemon} className="btn btn-primary mt-5">Show/Hide Pokemon</button>
      <div>
        {showPokemon ? <PokemonDisplay pokemon={pokemon}></PokemonDisplay> : null}
      </div>
    </div>
  );
}

export default App;
