import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import './App.css'

// Sends city searches from the browser to Open-Meteo.
import searchCities from './api/searchCities'
import cityForecast from './api/cityForecast'

function App() {
  // Start with empty text. setCityInput saves what the user types.
  const [cityInput, setCityInput] = useState('')

  // Start with an empty list. setCityResults saves the latest matches.
  const [cityResults, setCityResults] = useState([])

  // async lets this handler use await while the search is in progress.
  async function handleSearch(event) {
    event.preventDefault(); // Keep the form from navigating away.

    const city = cityInput.trim(); // Remove spaces from the ends.

    const matches = await searchCities(city); // Wait for the API response.

    setCityResults(matches.results ?? []) // Save the list, or [] if it's missing.
  }

  async function handlePlaceClick(place) {
    const forecast = await cityForecast(place.latitude, place.longitude);
    console.log(forecast);
  }

  return (
    <main>

      <h1>WeatherHelp</h1>

      {/* Clicking Search or pressing Enter runs handleSearch. */}
      <form onSubmit={handleSearch}>
        {/* htmlFor links this label to the input with id="city". */}
        <label htmlFor="city">City name</label>
        {/* value shows the saved text and onChange saves each edit. */}
        <input
          id="city"
          value={cityInput}
          onChange={(event) => setCityInput(event.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      <ul>
        {cityResults.map((place) => (
          <li key={place.id}>
            <button type="button" onClick={() => handlePlaceClick(place)}>
              {place.name}, {place.admin1}
            </button>
          </li>
        ))}
      </ul>

    </main>
  )
}

export default App
