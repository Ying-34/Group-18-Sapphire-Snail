/*
 * @Author: your name
 * @Date: 2021-05-09 22:11:52
 * @LastEditTime: 2021-05-09 22:13:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Group-18-Sapphire-Snail/backend_/server.js
 */
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// connect to mongoDB
const uri = process.env.ATLAS_URI;
// console.log(uri);

try{
    mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true} );
} catch(error){
    console.log("error!");
}

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const loginRouter = require('./routes/accountRouter');
app.use('/users', loginRouter);

const commentsRouter = require('./routes/commentsRouter');
app.use('/pageComments', commentsRouter);

const noteRouter = require('./routes/noteRouter');
app.use('/notes', noteRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});