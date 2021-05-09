var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    pageName: {
        type: String,
        required: true,
        unique: true
    },
    allComments:{type: Schema.Types.Mixed, required: true}
});

const pComments = mongoose.model('comments',commentSchema);


module.exports = pComments;