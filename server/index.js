const express = require('express');
const app = express();
const port = 3000;

// Load the function exported by searchCities.js. This does not call it yet.
// ./ starts from this file's folder; scripts is the folder containing the module.
const searchCities = require('./scripts/searchCities')

// Handle GET requests to /weather/api. req holds incoming request information;
// res lets us send a response to the caller. async allows await inside this handler.
app.get('/weather/api', async (req, res) => {
    // Read the city query parameter: ?city=Coram gives us the string "Coram".
    // Without that parameter, city is undefined. The query is not part of the route path.
    const city = req.query.city

    // Reject missing or empty input before contacting Open-Meteo.
    // !city is true for undefined or an empty string; it does not reject whitespace.
    if (!city) {
        // 400 means Bad Request. send sends the message to the caller.
        // return exits this handler, preventing the search and a second response below.
        return res.status(400).send("A city is needed")
    }

    // Call our imported function with the supplied city name.
    // await waits for its Promise to resolve to the parsed Open-Meteo search data.
    // This contains possible matches; it does not choose a city or fetch weather yet.
    // If the Promise rejects, this handler does not continue to the send below.
    const citySuggestions = await searchCities(city);

    // Express converts this object to JSON and sends it back to the caller.
    // Visiting the route directly displays that JSON in the browser.
    res.send(citySuggestions);
});

app.listen(port, () => {
    console.log(`Example of listening on port ${3000}`);
});
