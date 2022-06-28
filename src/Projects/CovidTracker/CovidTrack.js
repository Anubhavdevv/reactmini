import React, { useEffect, useState } from 'react'
import './style.css';
const CovidTrack = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {
            const response = await fetch('https://data.covid19india.org/data.json') //Whenever we use fetch it will return promises which means that wheter the data can be rejected
            const data = await response.json();  //It will return object
            setData(data.statewise[0]);                                                //or accepted if not await use .then
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <>
                <h1>🔴LIVE</h1>
                <h2>COVID-19 Coronavirus Tracker</h2>
                <section>
                            <ul>
                                <li className="card">

                                    <div className="card__main">
                                        <div className="card__inner">
                                            <p className="card__name">
                                                <span>OUR</span>Country
                                                <p className="card__total card__small">
                                                    India
                                                </p>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="card">

                                    <div className="card__main">
                                        <div className="card__inner">
                                            <p className="card__name">
                                                <span>Total</span>Recovered
                                                <p className="card__total card__small">
                                                    {data.recovered}
                                                </p>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="card">

                                    <div className="card__main">
                                        <div className="card__inner">
                                            <p className="card__name">
                                                <span>Total</span>Deaths
                                                <p className="card__total card__small">
                                                    {data.deaths}
                                                </p>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="card">

                                    <div className="card__main">
                                        <div className="card__inner">
                                            <p className="card__name">
                                                <span>Total</span>Active
                                                <p className="card__total card__small">
                                                    {data.active}
                                                </p>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="card">

                                    <div className="card__main">
                                        <div className="card__inner">
                                            <p className="card__name">
                                                <span>Last</span>Updated
                                                <p className="card__total card__small">
                                                    {data.lastupdatedtime}
                                                </p>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="card">

                                    <div className="card__main">
                                        <div className="card__inner">
                                            <p className="card__name">
                                                <span>Total</span>Confirmed
                                                <p className="card__total card__small">
                                                    {data.confirmed}
                                                </p>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            </section>
        </>
    )
}

export default CovidTrack;