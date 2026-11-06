import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import './App.css'

// These functions fetch Open-Meteo data directly from the browser.
//import searchCities from './api/searchCities'
//import cityForecast from './api/cityForecast'

function App() {
  // cityInput in the current text, setCityInput is a function to change that text, '' means it starts empty, useState keeps the value between renders and when updated it tells React to update the screen
  const [cityInput, setCityInput] = useState('')

  return (
    <main>
      <h1>WeatherHelp</h1>

      <label htmlFor="city">City name</label>
      {/* value={cityInput} shows text in the state, onChange runs whenever typed, event.target.value is the input's updated text, setCityInput() saves the text and React updates the screen*/}
      <input
        id="city"
        value={cityInput}
        onChange={(event) => setCityInput(event.target.value)}
      />
    </main>
  )
}

export default App
