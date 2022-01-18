import React, { useState, useEffect } from 'react';

// const Pokemon = (props) => {
    // const [pokemon, setPokemon] = useState([]);

    // useEffect(() => {
    //     fetch('https://pokeapi.co/api/v2/pokemon?limit=807/')
    //         .then(response => response.json())
    //         .then(response => setPokemon(response.results))
    // }, []);
    
//     return(
//         <>
//         {/* <h1>Whatup dudes</h1> */}
//         <button className="btn btn-primary mt-5">Fetch Pokemon</button>
//         <div>
//             <ul className="d-flex flex-column justify-content-center align-items-center text-capitalize">

//             {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
//                 return (
//                 <li key={index}>{pokemon.name}
//                 </li>)
//             })}
//             </ul>
//         </div>
//         </>)
// }

// export default Pokemon;