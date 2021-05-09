var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tipSchema = new Schema({
    pageName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    x:{
        type: String,
        required: true
    },
    y: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    noteTit:{
        type: String,
        required: true
    }
});

const tips = mongoose.model('tips',tipSchema);

module.exports = tips;