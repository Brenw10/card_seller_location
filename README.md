# Card Seller Location Project

## Prerequisites
 - Node >= 6 and npm >= 5.2

## Ports:
  > Make sure these ports are not using by any other program.
  - 3000 (client)
  - 3001 (server)

## Configuration
 - Access `client/src/core`.
 - Copy `endpoint.dist.js` and paste naming it to `endpoint.js`.

## Executing
 - To start server access `server` folder and execute `npm start` using terminal.
 - To start client access `client` folder and execute `npm start` using terminal.
 - Access localhost:3000 [clicking here](http://localhost:3000/).

## Architecture revision
  > Why docker was not used?
  - Stack is only Node.js

  > What technologies were used?
  - React for front-end
  - Node.js for back-end

  > How back-end works?
  - Basically using express it creates an endpoint.
  - To show where each worker must go were created multiple arrays simulating distance between a store to multiple workers then sorting asc and getting first item which is shorter distance.
  - Endpoint print a json containing workers and places to go by worker.

  > How front-end works?
  - It gets back-end json and create an Expansion Panel using Material-ui theme.

  > What paradigm is used?
  - Functional paradigm was used for both apps (client and server).

## Additional Notes
 - I spent about 5 hours to create the scaffolding and create the current code.