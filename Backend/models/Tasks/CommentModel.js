const mongoose = require('mongoose');
const moment = require("moment");

const commentSchema = mongoose.Schema({
    comment : String,
    timeStamp : String,
    commentedBy : {type : mongoose.Schema.Types.ObjectId, ref : "UserB"},
})

const comment = mongoose.model("Comment", commentSchema);
module.exports = comment;