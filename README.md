# WeatherHelp - Documentation

WeatherHelp is a learning project for searching cities and viewing weather. The React app calls Open-Meteo directly from the browser. A future backend will support saved favorites, search history, and user accounts.

## How to run

From the WeatherHelp folder, run the following in PowerShell. Run `npm install` the first time or after dependencies change.

```powershell
cd client
npm install
npm run dev
```

Open the local URL Vite prints and leave the terminal running. Press **Ctrl+C** to stop the dev server. The city search and forecast requests run without starting Express. The client also has `npm run lint` and `npm run build` commands.

## Frontend workflow

1. Enter a city name and submit the React form. The handler keeps the page in place and trims spaces from the ends of the input.
2. `client/src/api/searchCities.js` sends the city name to Open-Meteo. React stores the matches and shows each place name and region as a button.
3. Clicking a result passes its latitude and longitude to `client/src/api/cityForecast.js`. The handler logs the hourly forecast in the browser console.

The API functions throw on HTTP errors. The UI still needs loading, no-results, and error messages.

## Stack used

- **React** renders the search form and city results and stores the input and matches in state.
- **Vite** runs the local dev server with live updates and builds the client for production.
- **Open-Meteo** supplies matching locations and hourly forecasts.
- **Node.js** runs the frontend tools and can run the backend once it’s built.
- **Express** is installed for the planned backend. `server/index.js` is currently empty.

## Current status

City search, result selection, and the hourly forecast request work. The forecast is visible in the browser console. The next step is to display it on the page.

## Planned features

- Display current temperature and conditions.
- Display hourly weather and a daily forecast on the page.
- Save favorite cities.
- Store search history.
- Add user login.

## GitHub instructions

Run these commands from your project folder.

```powershell
git status
git add .
git diff --staged
git commit -m "Describe what changed"
git push
```

- `git status` shows your branch and which files changed.
- `git add .` stages all changes in the current folder and its subfolders. Use `git add path/to/file` to stage just one file.
- `git diff --staged` lets you review what will go into the commit.
- `git commit` saves the staged changes locally. Replace the example message with a short description of your work.
- `git push` sends your commits to GitHub. If Git says your branch has no upstream, run `git push -u origin your-branch-name` with your actual branch name.

## Command notes

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

## Personal Project Notes

6/16/26 - Just installed vite still a bit confused on what it does but from what I see it is useful for React. Starting with the frontend so my first goal will be creating a Weather Dashboard. Letting the user enter a city name and have a search button. It would show the current weather, the city (New York), the temp(70 degrees F), and the condition (clear). The idea will be user types city, user clicks search, app calss backend, backend calls weather API, weather data returns, and then React displays it.

6/16/26 - Minutes after the first post but wanted to seprate from frontend notes to the backend notes. Ran npm init -y and npm install express cors dotenv to get the basic tools setup. Created index.json order for Node to know where the server begins. The backend should get the city name from React/User, use Open-Meteo to trun the city into a longitude and latitude, and send JSOn to React. Something like GET /api/weather?city=Boston.

6/23/26 - My Mentor said it would be better to put the API routing in frontend/client. I thought it would be better to put the API stuff in the backend and leave what the user mainly sees in the front end like html. It makes more sense to have it more direct instead of creating a back and forth. Although putting it in the backend maybe more useful in the long run when API keys, user accounts, and such populate my code.

6/30/26 - Created openMeteoTest.js in order to test the Open Meteo Api's. I set the Open Meteo Url's for both Geocoding and Forecast. I set a city, "Coram", and set a 0 index for testing purposes. The function searchCities will use the geocoding url and input Coram as the city name, getting a json response of different cities. The function cityForecast would use the forecast url to get things like wind direction and temp using the selected city logitude and latitude, getting a json response of the forecast. The main function will first call searchCities using the set city string Coram. Since there will be multiple cities I had to set it to citySuggestion. I took those suggestions and used the set 0 index to get the first result setting it to selectedCity. Now being able to access the longitude and latitude of the selected city I called the cityForecast function with them. I set those results to selectedCityForecast then used console.log it. I also added some error handling with response.ok to throw the error if something went wrong and used response.status to show what went wrong.

10/28/26 - I recently graduated but I wanted to come back and get more practice. I set up Express and started a server on port 3000. I created and tested a GET route. Passed query parameters in city input to the backend. Separated searchCities into a server module and exported it then imported it with require. I connected my route to Open-Meteo and returned matching locations. I added a 400 response and return for missing city input. I then commited it to GitHub.

10/31/26 - My Mentor and I decided to move the api handlers to the frontend. I moved searchCities and cityForecast into client/src/api/. I changed the default exports and imported them into App.jsx. Made the browser call Open Meteo directly. Cleared out the Express server in server/index.js. The flow is now React - search cities - user selects a city - fetch forecase using the coords - display weather

11/18/26 - I connected the city search form to Open-Meteo. React remembers what I type, and event.preventDefault() keeps the page from reloading when I submit the form. I trim spaces from the ends of the query and save the matches in cityResults. I used .map() to make one clickable row per result. Each button shows the place name and region, and React uses the place ID to track the row. Clicking a place sends its latitude and longitude to the forecast function. I verified that it returns hourly weather in the browser console. Next time, I'll work on showing the forecast on the page.
