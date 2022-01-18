import React, { useState } from 'react';

const CryptoCoinsUsingFetch = () => {

    let [listOfCoins, setListOfCoins] = useState([])

    const getCoins = () => {

        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                setListOfCoins(response)
            })
            .catch((err) => {
                console.log('error!--->', err)
            })
    }

    return (
        <>
            <h3>Hello from Crypto component!</h3>
            <p><button onClick={getCoins}>Click to get Crpyto coins showing!</button></p>
            {
                listOfCoins.map((coinObj, i) => {
                    return (
                        <div style={{ border: "1px solid black" }}>
                            <h3>{coinObj.name}</h3>
                            <p>Price: {coinObj.current_price}</p>
                            <img src={coinObj.image} alt="" />
                        </div>
                    )
                })
            }
        </>)
}




export default CryptoCoinsUsingFetch;