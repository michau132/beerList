# BeerList


## Live demo
Live example: https://michau132.github.io/beerList/#/


## Installation

1. [`clone`](https://github.com/michau132/beerList.git) this repository and go into the project root
1. `yarn install` | `npm install` to install the website's npm dependencies

### Running locally

1. `yarn start | npm start` to start the hot-reloading development server 
1. `open http://localhost:3000` to open the site in your favorite browser - it should be done automaticlly


## Description
BeerList is showing by default 20 beers fetched from [punkapi](https://punkapi.com/). It shows name, description and image of beer. When scrolling images are lazy loaded. And after scrolling to bottom of page it loads more 20 beers and when is loading it displays loading indicator, after all beers are loaded it shows a HOC component that there is no more beers.   When user clicks on given beer the url changes  modal is opened  where we can see much more details about beer and suggested beers by [EBC](https://en.wikipedia.org/wiki/Beer_measurement).  


## Tech stack
+ [react](https://reactjs.org/docs/hello-world.html)
+ [mobx](https://github.com/ReactTraining/react-router)
+ [react-router](https://github.com/ReactTraining/react-router)
+ [styled components]()
+ [jest](https://jestjs.io/docs/en/getting-started) / [enzyme](https://airbnb.io/enzyme/docs/api/)
+ [react-spring](https://react-spring.surge.sh/)
+ [react-lazyload](https://github.com/jasonslyvia/react-lazyload)
