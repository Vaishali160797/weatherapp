import React, {useState, useEffect} from 'react';
import './style.css';

const Temp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Dehradun");

    useEffect( () => {
        const fetchApi = async() => {
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bd22e2a88c9955e54181ee09f6db6ebc`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }
        fetchApi();
    }, [search]);

    return (
        <>
           <div className="box">
                <div className="inputData">
                <input type="search" value={search} className="inputfield" onChange={ (e) => {
                    setSearch(e.target.value)
                }} />
                </div>
                {!city ? (<p className="errorMsg"> No Data Found</p>):
                    (
                        <>
                        <div className="info">
                            <h3 className="location">
                            <i className="fas fa-street-view"></i>{search}</h3>
                            <h1 className="temp">{city.temp}°C </h1>
                            <h3 className="tempmin_max"> Min: {city.temp_min}°C | Max : {city.temp_max}°C</h3>
                        </div>
                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                        </>
                    )}
            </div>
        </>
)};

export default Temp;
