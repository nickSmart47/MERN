import './App.css';
// import Pokemon from './components/Pokemon'
import PokemonDisplay from './components/PokemonDisplay'
import {useState, useEffect} from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);
  let [showPokemon, setShowPokemon] = useState(false)
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807/')
      .then(response => response.json())
      .then(response => setPokemon(response.results))
  }, []);

  // console.log(showPokemon)

  const toggleShowPokemon = () => {
    if (showPokemon){
      setShowPokemon(false);
    }
    else{
      setShowPokemon(true);

    }
    // console.log(showPokemon)
  }
  return (
    <div className="App container">
      <button onClick = {toggleShowPokemon} className="btn btn-primary mt-5">Show/Hide Pokemon</button>
      <div>
        {showPokemon? <PokemonDisplay pokemon = {pokemon}></PokemonDisplay> : null}
      </div>
    </div>
  );
}

export default App;
