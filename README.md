# WeatherHelp - Documentation

This is a fullstack weather app that allows users to find a city and view their current weather and forecast.

# Stack Used

- React: The frontend/client, will build the screen for the users to sees and interacts with. For example, the search box, search button, forecast, error messages, and more.
  
User types in a city and clicks search. Calls the Weather Mateo API info. 

- Vite: A tool to create and run React. React is considered the library while Vite sets the project up. Will help with creating the React folder structure, runs the app locally, refreshes the page fast, and for building the final version.
  
Runs the React app while in development phase.

- Node.js: Let me run JavaScript outside the browser. Which lets me use Javascript for the backend/server. For example, write code for receieving a request from React, talk to the weather API, and send data to React.

Runs the backend server.

- Express: It is the backend framework that runs on Node.js. While Node give the ability to make a server, Express makes the process easier. With it I can create routes like /api/weather, /api/forecast, and /api/favorties.

Creates the /api/weather route.

- Open-Meteo Weather API: This is the outside weather service I will get the actual weather data from. So when the backend asks Open-Meteo, "What is the weather for this area?", it will send data back like the temp, wind speed, rain chance, and more.

Provides the weather data.

# Planned Features

- Search weather by city
- Display current temp and conditions
- Display daily forecast
- Save favorite cities
- Store search history
- Add user login

# GitHub - Instructions

Will be professional catalogued with GitHub.

Making a commit:

git status
git add .
git commit -m "Project setup"
git push origin main

Use branches:

git checkout -b setup-client

git add . 
git commit -m "Set up React client"
git push origin setup-client

Pull Request:

When changes are made on a separate branch they can be merged into main. This Pull request will be made on GitHub. 

Pull:

This is different from a Pull request, "git pull" will get the newest code from GitHub to my computer. 
git pull origin main

# Current Status

Still developing

# How to run

Instructions will be provided later

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
- npm run dev - Gives a localhost link and starts up my React app. When opening the link in the browser I would be able to see the app. Need to keep it running while working on frontend.
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
