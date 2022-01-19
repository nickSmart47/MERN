import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import obiwan from './obiwan.jpg';

const StarWarsDisplay = (props, history) => {
    const { category, id } = useParams();
    let [data, setData] = useState();
    let [theseArentTheDroids, setTheseArentTheDroids] = useState(false);
    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`).then(response => { setData(response.data) })
            .catch(err => {
                console.log("error!!--->", err)
                droids()
                // console.log(theseArentTheDroids)

            });
    }, [])
    // console.log(theseArentTheDroids)
    // console.log(data)

    const droids = () =>{
        setTheseArentTheDroids(true)
    }

    if (data) {
        if (category == "people") {
            return (
                <div className="p-2 container d-flex flex-column">
                    <h3>{data.name}</h3>
                    <p><strong>Height: </strong> {data.height}</p>
                    <p><strong>Mass: </strong> {data.mass}</p>
                    <p><strong>Hair Color: </strong> {data.hair_color}</p>
                    <p><strong>Skin Color: </strong> {data.skin_color}</p>
                </div>
            )
        }
        else {
            return (
                <div className="p-2 container d-flex flex-column">
                    <h3>{data.name}</h3>
                    <p><strong>Climate: </strong> {data.climate}</p>
                    <p><strong>Terrain: </strong> {data.terrain}</p>
                    <p><strong>Surface Water: </strong> {data.surface_water}</p>
                    <p><strong>Population: </strong> {data.population}</p>
                </div>
            )
        }
    }
    else if (theseArentTheDroids) {
        return (
            <>
                <h1>These aren't the droids you're looking for...</h1>
                <img src={obiwan} style={{ width: "23rem" }} alt="Obi Wan Kenobi" />
            </>
        )

    }
    else {
        return (
            <h1>Fetching, please wait...</h1>
        )
    }

}


export default StarWarsDisplay;