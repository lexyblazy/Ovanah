This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To run the project

Using NPM

```
git clone git@github.com:lexyblazy/Ovanah.git
cd Ovanah
npm install

```

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The UI library used for the project is [Materialize](https://materializecss.com/)

I made use of `redux` for state management,`redux-thunk` to handle async action creators.
`axios` for network requests.<br>
I also had to use a [Proxy Server](https://cors-anywhere.herokuapp.com/) during development, since the [APIendpoints](https://www.metaweather.com/api) kept returning `CORS` errors.

One thing to note is I did not use a routing library(react-router).
I assumed it may be too much overhead since the entire app design was simple.<br>
However I can hook it up in less than 30 minutes if required.<br>
Also ,I intially wanted to make use of a full fledged material ui react framework
[MaterialUI](https://material-ui.com/), but it might too much of an overhead and unnecessary bundle size in this context.<br>
Re: 5 day weather forecast <br>
The API returned 6 days weather forecast, so I render all 6

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
