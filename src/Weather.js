import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState("Helsinki");
  let [temperature, setTemperature] = useState(-3);
  let [description, setDescription] = useState("broken clouds");
  let [humidity, setHymidity] = useState("78");
  let [wind, setWind] = useState("5");

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e0a5a97de9a0b7a951e9d154a8f9bad8&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  let form = (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              className="form-control"
              autofocus="on"
              placeholder="Enter a city"
              onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              className="btn btn-primary w-100"
              value="Search"
            />
          </div>
        </div>
      </form>
    </div>
  );

  let overview = (
    <div className="overview">
      <h1>{city}</h1>
      <ul>
        <li>Sunday, 20:23</li>
        <li>{description}</li>
      </ul>
    </div>
  );

  let weather = (
    <div className="weather">
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <ReactAnimatedWeather
              icon="CLEAR_NIGHT"
              color="black"
              size={64}
              animate={true}
            />
            <div>
              <strong>{Math.round(temperature)}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/"> °F</a>
              </span>
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity: {humidity} %</li>
            <li>Wind: {Math.round(wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHymidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
  }

  return (
    <div>
      {form}
      {overview}
      {weather}
    </div>
  );
}
