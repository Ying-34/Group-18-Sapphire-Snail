# Group-18-Sapphire-Snail

Sapphire snail is a social online search forum based on Wikipedia. It enables users to read relevant knowledge and comment on text information at the same time. The software and its contents are only used by CompSci 732 assignment.<br>

Sapphire snail is determined to build a social Wikipedia forum that can interact with
each other. The project was founded by Chloe, Tom, Yvonne and Winona, members of group
18. Now a complete web app is provided, users can get social interaction in the process
of reading through comments.<br>

### A minimal forum application built with the following technologies
* [React](https://facebook.github.io/react/)
* [Node.js](https://nodejs.org/)
* [ExpressJS](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Jest](https://jestjs.io/)
* [Wiki API](https://en.wikipedia.org/w/api.php)

### Application Features
* Users can search on this forum, which is linked to wiki database
* Users can register or sign in the forum
* Users can post a comment

### Documentations
* [API Docs](https://github.com/csdoris/Group-18-Sapphire-Snail/blob/main/frontend_/src/api/axios.js)

### Home View
![home view](./Readme_Pics/Homepage_View.gif)

### Add Comment
![add comment](./Readme_Pics/Comment.gif)

### Add Note
![add note](./Readme_Pics/Create_Note.gif)

## Deploy on you own server

Please make sure you have following software installed in your system:
* Node.js > 6.0
* NPM / Yarn
* Git
* MongoDB

To prepare this project, we need to clone the repository:<br>
    `$ git clone https://github.com/csdoris/Group-18-Sapphire-Snail`

To start this project:<br>
First, we need to connect to the database:<br>
    `$ mongodb+srv://<username>:<password>@cluster0.yxtjp.mongodb.net/test`<br>
(Don't forget to change <username> and <password> into your username and password for mongodb)<br>
    
Then we can test this project(optional):<br>
if npm:<br>
    `$ npm install`
    `$ npm run test`

if yarn:<br>
    `$ yarn install`
    `$ yarn run test`

Secondly, we need to run backend:<br>
direct to backend folder<br>
    `$ cd backend_`

Then we have to install the necessary dependencies using either NPM or Yarn:<br>

if npm:<br>
1. install npm:<br>
`$ npm install`
2. start this project:<br>
`$ npm start` -->

if yarn:<br>
1. install yarn:<br>
`$ yarn install`
2. start this project:<br>
`$ yarn start` -->

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


