import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div class="weather-app-wrapper">
        <div class="weather-app">
          <Weather />
        </div>

        <small>
          <a
            href="https://github.com/RinaIryna/weather-app-react"
            target="_blank"
            rel="noreferrer"
            class="source"
          >
            Open-source code
          </a>
          by Iryna Lobova
        </small>
      </div>
    </div>
  );
}
