import React from "react";

import WeatherBody from "../components/WeatherBody";

export default function DisplayWeather(props) {
  const {
    temperature,
    description,
    location,
    region,
    country,
    wind_speed,
    pressure,
    humidity,
    img,
  } = props.weather;

  return (
    <div className="user-weather">
      <div className="row">
        <div className="col-md-3">
          <img className="mainImg" src={img} alt="weather-img" />
        </div>

        <div className="col-md-3">
        
        <div className="col-md-12 weather-info">
        <h2>{temperature}
            <sup>o</sup>C 
          </h2>
          <h4>{description}</h4>
         
        </div>
        <div className="col-md-12 weather-info">
          <p>
            <b>Wind Speed</b>(km/hr) :- <span><b>{wind_speed}</b></span>
          </p>
          
        </div>

        <div className="col-md-12 weather-info">
          <p>
            <b>Preassure</b>(millibar) :- <span><b>{pressure}</b></span>
          </p>
       
        </div>

       
        </div>
        

     
      </div>





      <div className="row">
      <div className="col-md-3 weather-temp">
          
          <h3>{location}</h3>{" "}
          <h4>
            {region} , {country}
          </h4>
        </div>
      </div>
      <div className="row">
        <div className="weatherContainer pt-3 pb-3">
          <WeatherBody day={"Mon"} icon={"Sun"} minTemp={35} maxTemp={45} />
          <WeatherBody day={"Tue"} icon={"Mistake"} minTemp={0} maxTemp={-1} />
          <WeatherBody day={"Wed"} icon={"Snowing"} minTemp={5} maxTemp={-5} />
          <WeatherBody day={"Thu"} icon={"Rain"} minTemp={8} maxTemp={10} />
          <WeatherBody
            day={"Fri"}
            icon={"Snowing"}
            minTemp={-5}
            maxTemp={-19}
          />
        </div>
      </div>
    </div>
  );
}
