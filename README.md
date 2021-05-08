# Group-18-Sapphire-Snail

A minimal forum application built with the following technologies:
* [React](https://facebook.github.io/react/)
* [Node.js](https://nodejs.org/)
* [ExpressJS](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Wiki Database](    )

### Application Features
* Users can post a discussion
* Users can reply their opinions regarding discussion
* Users can favorite discussions
* Users have their own profile page
* Admin can create new forum categories
* Admin have a lot of power over every users discussions and opinions :-p

### Documentations
* [API Docs]()

### Home View
![home view]()

### Comment Page
![comment page]()

## Deploy on you own server

Please make sure you have following software installed in your system:
* Node.js > 6.0
* NPM / Yarn
* Git
* MongoDB

To prepare this project, we need to clone the repository:<br>
`$ git clone https://github.com/`

To start this project:
First, we need to connect to the database:

Secondly, we need to run backend:
direct to backend folder(`$ cd backend_`)

Then we have to install the necessary dependencies using either NPM or Yarn:
if npm:
1. install express:
`$ npm install express`
2. install express-generator
`$ npx express-generator`
3. Install nodemon (auto update, only have to do this once):
`$ npm install -g nodemon`
4. start this project:
`$ npm start`

if yarn:
1. install yarn:
`$ yarn install`
2. Is yarn installed? if not:
`$ npm install -g yarn`
3. download express framework for this project:
`$ yarn add express`
4. yarn initialization:
`$ yarn init`
5. Installing nodemon (auto update, only have to do this once):
`$ yarn global add nodemon`
6. start this project:
`$ yarn start`

Then, we need to run frontend:
direct to frontend folder(`$ cd frontend_`):

if npm:
1. install npm:
`$ npm install`
2. run the app in production environment:
`$ npm run start`

if yarn:
1. install yarn:
`$ yarn install`
2. run the app in production environment:
`$ yarn run start`


We need to provide all the information here. You can notice that we need the database url here too. My `local` MongoDB url looks like:
```
mongodb://localhost:27017/reforum
```
