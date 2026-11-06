// Browser requests go directly to Open-Meteo's forecast endpoint.
const OPEN_METEO_FORECAST_URL = "https://api.open-meteo.com/v1/forecast";

// React passes latitude and longitude from the city the user selected.
const cityForecast = async (latitude, longitude) => {

    // Request hourly temperature, humidity, feels-like, precipitation, visibility, and wind.
    // Hourly values are a forecast series, not a single current reading.
    const url = `${OPEN_METEO_FORECAST_URL}?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,visibility,wind_speed_10m,wind_direction_10m`;

    // Wait for the weather service's HTTP response.
    const response = await fetch(url);

    // Throw on HTTP errors so React can display a request error.
    if (!response.ok) {
        throw new Error(`Open Meteo requested failed: ${response.status}`)
    }

    // Return forecast data for React to store in state and display.
    return await response.json();
}

export default cityForecast
