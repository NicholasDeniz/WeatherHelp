// Geocoding means turning a place name into location data, including coordinates.
const OPEN_METEO_GEOCODING_URL = "https://geocoding-api.open-meteo.com/v1/search";

// This separate endpoint accepts coordinates and returns weather data.
const OPEN_METEO_FORECAST_URL = "https://api.open-meteo.com/v1/forecast";

// Fixed input for this experiment; no React input or backend route is involved yet.
const CITY_SEARCH_STRING = "Coram";

// Arrays start at index 0, so this selects the first matching location.
const SUGGESTION_INDEX = 0; 

// async lets this function use await. Calling it returns a Promise: a value representing work that will finish later, or fail.
// cityName is the input supplied by whoever calls this function.
const searchCities = async (cityName) => {

    // Backticks create a template string; ${...} inserts a value into it.
    // The query parameters after ? specify the name, language, and response format.
    const url = `${OPEN_METEO_GEOCODING_URL}?name=${cityName}&language=en&format=json`;

    // fetch sends the request. await pauses this function until a response arrives;
    // it does not block the whole JavaScript environment while waiting.
    const response = await fetch(url);
    
    // fetch does not automatically throw for HTTP errors such as 404 or 500.
    // ok is true for HTTP status codes from 200 through 299; ! means "not".
    if (!response.ok) {
        // Throwing stops this function and rejects its Promise.
        // status is the numeric HTTP status code returned by the service.
        throw new Error(`Open Meteo requested failed: ${response.status}`)
    }

    // Read and parse the JSON response body into JavaScript data, then return it.
    // Reading the body is also asynchronous, which is why it uses await.
    return await response.json();
};

// This function needs coordinates rather than a city name.
const cityForecast = async (latitude, longitude) => {

    // Insert the chosen location's coordinates into the weather request.
    // hourly asks for values across hourly time steps, not a single current reading.
    // The comma-separated fields request temperature, humidity, feels-like temperature,
    // precipitation chance and amount, visibility, wind speed, and wind direction.
    const url = `${OPEN_METEO_FORECAST_URL}?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,visibility,wind_speed_10m,wind_direction_10m`;

    // Wait for the weather service's HTTP response.
    const response = await fetch(url);

    // Stop here if the service reports an unsuccessful HTTP status.
    if (!response.ok) {
        throw new Error(`Open Meteo requested failed: ${response.status}`)
    }

    // Return the parsed weather data to the caller.
    return await response.json();
}

// Coordinate the experiment: search for a place, choose one, then get its weather.
const main = async () => {

    // Wait for the city search before trying to use its results.
    // This variable holds the whole response object, including its results array.
    const citySuggestions = await searchCities(CITY_SEARCH_STRING);

    // Optional debugging output: JSON.stringify formats the data as readable text.
    // null means no custom conversion; 4 means indent nested data by four spaces.
    // The leading // keeps this statement from running.
    //console.log(JSON.stringify(citySuggestions, null, 4));

    // Read the results array and select the entry at SUGGESTION_INDEX.
    // This test assumes results exists and contains an entry at that index.
    const selectedCity = citySuggestions.results[SUGGESTION_INDEX];

    // Uncomment to inspect the chosen location before requesting its weather.
    //console.log(selectedCity);

    // Read the latitude and longitude properties from that location object.
    // The forecast request depends on the city search having finished first.
    const selectedCityForecast = await cityForecast(selectedCity.latitude, selectedCity.longitude);

    // Print the returned data to the console; this does not display it in React.
    console.log(selectedCityForecast);
};

// Defining main above does not run it; this call starts the experiment.
// There is no catch handler here, so a rejected Promise is not handled by this script.
main();
