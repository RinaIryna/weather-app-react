import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function () {
  let [city, setCity] = useState("Helsinki");
  let [temperature, setTemperature] = useState(-3);

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

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setTemperature(response.data.main.temp);
  }

  return <div>{form}</div>;
}
