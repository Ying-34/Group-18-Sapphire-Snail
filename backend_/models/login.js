var mongoose = require("mongoose");

var loginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar:{
        type: String
    }
});

module.exports = mongoose.model("Login", loginSchema);