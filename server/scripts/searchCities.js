// Geocoding means turning a place name into location data, including coordinates.
const OPEN_METEO_GEOCODING_URL = "https://geocoding-api.open-meteo.com/v1/search";

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

module.exports = searchCities