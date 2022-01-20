import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import obiwan from './obiwan.jpg';

const StarWarsDisplay = (props, history) => {
    const { category, id } = useParams();
    const location = useLocation();
    let [data, setData] = useState();

    let [homeworldData, setHomeworldData] = useState('');

    let [theseArentTheDroids, setTheseArentTheDroids] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`).then(response => { setData(response.data) }
        )
            .catch(err => {
                console.log("error!!--->", err)
                droids()
                // console.log(theseArentTheDroids)
            });
    }, [location] )
    
    const droids = () => {
        setTheseArentTheDroids(true)
        return (
            <>
                <h1>These aren't the droids you're looking for...</h1>
                <img src={obiwan} style={{ width: "23rem" }} alt="Obi Wan Kenobi" />
            </>
        )
    }

    const getHomeworldLink = () => {
        if (data.homeworld){
            let homeworldLink = data.homeworld
                // console.log(homeworldLink)
                let homeworldNumber = ''
                for (let i = 0; i< homeworldLink.length; i++){
                    if (isNaN(homeworldLink[i])){
                        continue
                    }
                    else{
                        homeworldNumber += homeworldLink[i]
                    }
                }
                homeworldLink = `/planets/${homeworldNumber}`
                // console.log(homeworldLink)
                return homeworldLink

        }
    }
    // console.log("type of id is" + id.typeof)
    // if (category === 'people' && id !== 0 && data) {
    //     if (homeworldData === '') {
    //         axios.get(`${data.homeworld}`).then(response => { setHomeworldData(response.data) })
    //             .catch(err => {
    //                 console.log("error!!--->", err)
    //                 droids()
    //             });
    //     }
    //     // console.log(homeworldData)
    // }
    
    if (id === 0 || id === undefined){
        droids()
    }


    else if (data) {
        if (category === "people") {
            if (id !== 0 && data) {
                if (homeworldData === '') {
                    axios.get(`${data.homeworld}`).then(response => { setHomeworldData(response.data) })
                        .catch(err => {
                            console.log("error!!--->", err)
                            droids()
                        });
                }
                // console.log(homeworldData)
            }
            return (
                <div className="p-2 container d-flex flex-column">
                    <h3>{data.name}</h3>
                    <p><strong>Height: </strong> {data.height}</p>
                    <p><strong>Mass: </strong> {data.mass}</p>
                    <p><strong>Hair Color: </strong> {data.hair_color}</p>
                    <p><strong>Skin Color: </strong> {data.skin_color}</p>
                    <p><strong>Homeworld: </strong> {homeworldData.name} <a href={getHomeworldLink()}>Link</a></p>
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