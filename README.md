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

- React: Builds the search form, city selection, forecast display, and request messages. Stores input and fetched data in state and calls the API functions from event handlers.

- Vite: A tool to create and run React. React is considered the library while Vite sets the project up. Will help with creating the React folder structure, runs the app locally, refreshes the page fast, and for building the final version.
## Runs the React app while in development phase.

- Node.js: Runs JavaScript outside the browser, including Vite's development tools and the future backend.

- Express: Planned for backend routes that manage favorites, search history, and accounts. Weather fetching does not currently need an Express server.

- Open-Meteo: The external geocoding and weather service. The browser requests matching cities and then hourly forecasts directly.

# Planned Features

- Search weather by city
- Display current temp and conditions
- Display daily forecast
- Save favorite cities
- Store search history
- Add user login

# GitHub - Instructions

Will be professional catalogued with GitHub.

- Making a commit

git status
git add .
git commit -m "Project setup"
git push origin main

- Use branches

git checkout -b setup-client

git add . 
git commit -m "Set up React client"
git push origin setup-client

- Pull Request

When changes are made on a separate branch they can be merged into main. This Pull request will be made on GitHub. 

- Pull

This is different from a Pull request, "git pull" will get the newest code from GitHub to my computer. 
git pull origin main

# Current Status

The search and forecast modules have moved to `client/src/api/` and use default exports. City names are URL-encoded in search requests. `App.jsx` imports the functions but still displays the Vite starter interface; search, selection, forecast rendering, and UI validation are next. `server/index.js` is currently empty.

The existing forecast request retrieves hourly data. Current conditions and daily forecasts remain planned features.

# How to run

From the project folder:

```powershell
cd client
npm install
npm run dev
```

Open the local URL printed by Vite and leave the terminal running. No Express server is required for the frontend weather workflow. At this stage, the page still shows the starter interface.

# Start plan

1. Create GitHub repo
2. Clone it
3. Add README
4. Add client and server folders
5. Make first commit
6. Crete React app inside client
7. Push setup to github

# Command notes

- npm install - downloads needed packages like what React needs.
- git status - shows what files changed and if things need to be commited.
- git add . - Stages changed files so Git is ready to commit them.
- . - Means current folder usually.
- npm create vite@latest - Starts the Vite project creator.
- Ctrl + C - Stops/cancels the terminal process.
- npm run dev - Gives a localhost link and starts up my React app. When openin the link in the browser I would be able to see the app. Need to keep it running while working on frontend.
- pwd - shows current folder path, helpful to see where I am.
- cd - goes into a folder.
- cd .. - goes back a folder.
- mkdir - creates folders .
- git log --oneline - sees commit history.
- git branch - see what branch I'm on now.
- git checkout main - creates/switches branches.
- git add . / git commit -m "Set up React client" - allows adding and commiting changes
- git push origin setup-client - pushes branch to GitHub
- git pull origin main - pulls newest code from GitHub
- npm install axios - installs a specific package
- npm uninstall axios - uninstalls a specific package
- npm init -y - creates a package.json for my backend
- npm install express cors dotenv - install common backend tools
- node index.js - starts backend if the main file is named index.js

# Personal Project Notes

6/16/26 - Just installed vite still a bit confused on what it does but from what I see it is useful for React. Starting with the frontend so my first goal will be creating a Weather Dashboard. Letting the user enter a city name and have a search button. It would show the current weather, the city (New York), the temp(70 degrees F), and the condition (clear). The idea will be user types city, user clicks search, app calss backend, backend calls weather API, weather data returns, and then React displays it. 

6/16/26 - Minutes after the first post but wanted to seprate from frontend notes to the backend notes. Ran npm init -y and npm install express cors dotenv to get the basic tools setup. Created index.json order for Node to know where the server begins. The backend should get the city name from React/User, use Open-Meteo to trun the city into a longitude and latitude, and send JSOn to React. Something like GET /api/weather?city=Boston.

6/23/26 - My Mentor said it would be better to put the API routing in frontend/client. I thought it would be better to put the API stuff in the backend and leave what the user mainly sees in the front end like html. It makes more sense to have it more direct instead of creating a back and forth. Although putting it in the backend maybe more useful in the long run when API keys, user accounts, and such populate my code. 

6/30/26 - Created openMeteoTest.js in order to test the Open Meteo Api's. I set the Open Meteo Url's for both Geocoding and Forecast. I set a city, "Coram", and set a 0 index for testing purposes. The function searchCities will use the geocoding url and input Coram as the city name, getting a json response of different cities. The function cityForecast would use the forecast url to get things like wind direction and temp using the selected city logitude and latitude, getting a json response of the forecast. The main function will first call searchCities using the set city string Coram. Since there will be multiple cities I had to set it to citySuggestion. I took those suggestions and used the set 0 index to get the first result setting it to selectedCity. Now being able to access the longitude and latitude of the selected city I called the cityForecast function with them. I set those results to selectedCityForecast then used console.log it. I also added some error handling with response.ok to throw the error if something went wrong and used response.status to show what went wrong.

10/28/26 - I recently graduated but I wanted to come back and get more practice. I set up Express and started a server on port 3000. I created and tested a GET route. Passed query parameters in city input to the backend. Separated searchCities into a server module and exported it then imported it with require. I connected my route to Open-Meteo and returned matching locations. I added a 400 response and return for missing city input. I then commited it to GitHub.

10/31/26
My Mentor and I decided to move the api handlers to the frontend. I moved searchCities and cityForecast into client/src/api/. I changed the default exports and imported them into App.jsx. Made the browser call Open Meteo directly. Cleared out the Express server in server/index.js. The flow is now React - search cities - user selects a city - fetch forecase using the coords - display weather

11/3/26
