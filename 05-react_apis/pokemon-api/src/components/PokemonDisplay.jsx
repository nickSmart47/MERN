import React, { useState} from 'react';

const PokemonDisplay = (props) => {
    if (props.pokemon) {
        return (<div>
        <ul className="d-flex flex-column justify-content-center align-items-center text-capitalize">

        {props.pokemon.length > 0 && props.pokemon.map((pokemon, index)=>{
            return (
            <li key={index}>{pokemon.name}
            </li>)
        })}
        </ul>
    </div>
        )}
    else{
        return(
            <div></div>)
    }
}

export default PokemonDisplay;