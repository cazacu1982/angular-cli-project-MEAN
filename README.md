# AngularReviewDb

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# About Project:

1.The front-end of this project was generated with Angular CLI.
  
  This project uses the [MEAN stack:](https://en.wikipedia.org/wiki/MEAN_(software_bundle)) 
  
  [Mongoose.js (MongoDB):](http://www.mongoosejs.com/) database
  [Express.js:](http://expressjs.com/) backend framework
  [Angular 2:](https://angular.io/) frontend framework
  [Node.js:](https://nodejs.org/) runtime environment
  [Angular CLI:](https://cli.angular.io/) project scaffolding
  [Bootstrap:](http://www.getbootstrap.com/) layout and styles
  [Font Awesome:](http://fontawesome.io/) icons
  
  2. Install Node.js and MongoDB
     Install Angular CLI: npm i angular-cli -g@latest
     From project root folder install all the dependencies: npm i 
  3. Command window 1: mongod: run MongoDB (read more about [Mongoose.js (MongoDB):](http://www.mongoosejs.com/) database ) 
  (be aware to have mongoDb open and create a db reviewking like in my server.js or rename it.)
     
     Command window 2: npm run build: build the project and run and npm run dev: keep watching the files for changes Express server http://localhost:3000
     
     Command window 3: npm start: run App server http://localhost:4200
     
     ## BUT
  
  # For Frontend developers(how don't now much about backend)
  
  1. Angular cli: generate the project frontend app.
  2. Npm install.
  3. Add a server.js file for backend Api.
  4. `npm run build` open localhost:3000 and `npm start` localhost:4200 from dif  Command window.
  5. Now  on localhost:4200 where data loads from database you see just is Loading... and in console `Failed to load resource: net::ERR_CONNECTION_REFUSED`
  5. Now you can work only on localhost:4200 if you have a [CORS](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi) extension from Chrome opened.
  be sure you have localhost:3000 runing.
  
  
  ## Any issue
    You notice any problem or error.
  ## Author
    [Cazacu Dragos](https://github.com/cazacu1982)
  

