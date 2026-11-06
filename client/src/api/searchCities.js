// Browser requests go directly to Open-Meteo; Express is not involved.
// Geocoding turns a city name into matching locations and coordinates.
const OPEN_METEO_GEOCODING_URL = "https://geocoding-api.open-meteo.com/v1/search";

// React supplies the trimmed city name after checking for blank input.
const searchCities = async (cityName) => {

    // Encode the name so spaces and special characters stay inside its query value.
    const url = `${OPEN_METEO_GEOCODING_URL}?name=${encodeURIComponent(cityName)}&language=en&format=json`;

    // Wait for the geocoding response without blocking the page.
    const response = await fetch(url);
    
    // Throw on HTTP errors so React can display a request error.
    if (!response.ok) {
        throw new Error(`Open Meteo requested failed: ${response.status}`)
    }

    // Return matches to React; the user chooses a city before fetching weather.
    return await response.json();
};

export default searchCities
