import React, { useEffect } from 'react'

const CovidTrack = () => {
    const getCovidData = async() => {
        try{
         const response = await fetch('https://data.covid19india.org/data.json') //Whenever we use fetch it will return promises which means that wheter the data can be rejected
         console.log(response);
        }
        catch(err){
            console.log(err);
        }                                                                        //or accepted if not await use .then
    }
    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <>
            <h1>LIVE</h1>
            <h2>COVID-19 Coronavirus Tracker</h2>
        </>
    )
}

export default CovidTrack;