# WeatherHelp - Documentation

WeatherHelp is a learning project for searching cities and displaying weather. Weather requests run in the frontend. A future backend will support saved favorites, search history, and user accounts.

## Frontend workflow

1. The user enters a city name in React and submits the search.
2. React trims the input and checks that it is not blank.
3. React calls `client/src/api/searchCities.js`, which fetches matching cities directly from Open-Meteo.
4. React stores the results in state and displays city, region, and country so the user can choose a match.
5. Clicking a city supplies that result's latitude and longitude to `client/src/api/cityForecast.js`.
6. That function fetches the forecast directly from Open-Meteo. React stores and displays the response.

The API modules are ordinary JavaScript functions, not Express route handlers. React imports and calls them; there is no request to a local `/weather/city` or `/weather/forecast` route in this workflow.

React will show loading, no-results, and error messages. The API functions check `response.ok` and throw on HTTP errors; React must catch request failures. Coordinates come from the selected search result rather than user-entered coordinate fields. Future backend routes must validate data before saving it.

# Stack Used

- React: The frontend/client, will build the screen for the users to sees and interacts with. For example, the search box, search button, forecast, error messages, and more. 
# User types in a city and clicks search. Sends city to backend. Displays the weather on the screen. 

- Vite: A tool to create and run React. React is considered the library while Vite sets the project up. Will help with creating the React folder structure, runs the app locally, refreshes the page fast, and for building the final version.
# Runs the React app while in development phase.

- Node.js: Let me run JavaScript outside the browser. Which lets me use Javascript for the backend/server. For example, write code for receieving a request from React, talk to the weather API, and send data to React. 
# Runs the backend server. Both Node and Express send weather data to React when gotten from Open-Metro

- Express: It is the backend framework that runs Node.js. While Node give the ability to make a server, Express makes the process easier. With it I can create routes like /api/weather, /api/forecast, and /api/favorties.
# Creates the /api/weather route.

- Open-Metro Weather API: This is the outside weather service I will get the actual weather data from. So when the backend asks Open-Metro, "What is the weather for this area?", it will send data back like thye temp, wind speed, rain chance, and more. 
# Provides the weather data.

# Planned Features

- Search weather by city
- Display current temp and conditions
- Display daily forecast
- Save favorite cities
- Store search history
- Add user login

# Current Status

The search and forecast modules have moved to `client/src/api/` and use default exports. City names are URL-encoded in search requests. `App.jsx` imports the functions but still displays the Vite starter interface; search, selection, forecast rendering, and UI validation are next. `server/index.js` is currently empty.

The existing forecast request retrieves hourly data. Current conditions and daily forecasts remain planned features.

# How to run

Instructions will be provided later
