# Gif Search in React
---------------------------

## To run: 
Clone this directory and run `npm install` to install dependencies. To run the development server run `npm start` and point your browser to `localhost:3000`.

## Implementation details

* Bootstrapped with Create React App to allow me to get down to business without having to go through a lengthy configuration. 
* Styling largely from Twitter Bootstrap, with some minimal tweaks.
* Users' favorite gifs are saved by ID in local storage to persist their gif preferences. 

## Todos

* Move this into a server directory which can serve up a Node/Express application to allow secure login and real persistence in a database. Furthermore it could be possible to make requests to Giphy from the back end so we can hide the API key from users.
* Re-style the application. Looks very hackathony because it is. Consider switching to a richer UI Framework such as Material UI
* Add unit tests.