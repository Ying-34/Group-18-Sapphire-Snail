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
![home view]((./Readme_Pics/Homepage_View.gif))

### Content Page
![content page]()

## Deploy on you own server

Please make sure you have following software installed in your system:
* Node.js > 6.0
* NPM / Yarn
* Git
* MongoDB

To prepare this project, we need to clone the repository:<br>
`$ git clone https://github.com/`

To start this project:<br>
First, we need to connect to the database:

Secondly, we need to run backend:<br>
direct to backend folder<br>
`$ cd backend_`

Then we have to install the necessary dependencies using either NPM or Yarn:<br>
if npm:
1. install express:<br>
`$ npm install express`
2. install express-generator:<br>
`$ npx express-generator`
3. Install nodemon (auto update, only have to do this once):<br>
`$ npm install -g nodemon`
4. start this project:<br>
`$ npm start`

if yarn:<br>
1. install yarn:<br>
`$ yarn install`
2. Is yarn installed? if not:<br>
`$ npm install -g yarn`
3. download express framework for this project:<br>
`$ yarn add express`
4. yarn initialization:<br>
`$ yarn init`
5. Installing nodemon (auto update, only have to do this once):<br>
`$ yarn global add nodemon`
6. start this project:<br>
`$ yarn start`

Then, we need to run frontend:<br>
direct to frontend folder<br>
`$ cd frontend_`

if npm:<br>
1. install npm:<br>
`$ npm install`
2. run the app in production environment:<br>
    `$ npm run start`

if yarn:<br>
1. install yarn:<br>
`$ yarn install`
2. run the app in production environment:<br>
`$ yarn run start`


We need to provide all the information here. You can notice that we need the database url here too. My `local` MongoDB url looks like:<br>
`mongodb+srv://cluster0.yxtjp.mongodb.net/test`

