# Math Solver

## Requirements

Mathsteps requires Node version > 6.0.0

## Installation

First clone the project from github:

    cd mathsteps

Install the project dependencies:

    npm install

## Usage

Start Node server:

    npm start
    
Go to localhost:
    
    127.0.0.1:5000
    
Server will display : Welcome to Veda Math Solver

To solve an equation :
```
127.0.0.1:5000/solveEquation/[expression]
```

To simplify :
```
127.0.0.1:5000/simplifyExpression/[expression]
```

## To deploy in Heroku

 - [Deploying Node.js Apps on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)

## Acknowledgement
 - [google/mathsteps ](https://github.com/google/mathsteps)