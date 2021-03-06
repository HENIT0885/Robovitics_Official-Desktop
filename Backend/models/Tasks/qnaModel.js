const mongoose = require('mongoose');
const moment = require("moment");
const Comment = require('./CommentModel');
const { Timestamp } = require('bson');
const userBasicSchema = require('../UserBasicModel');

const qnaSchema = mongoose.Schema({
    TaskID : {type : mongoose.Schema.Types.ObjectId, ref : "Task"},
    question : String,
    comments : [{type : mongoose.Schema.Types.ObjectId, ref : "Comment"}],
    raisedBy : {type : mongoose.Schema.Types.ObjectId, ref : "UserB"},
    timeStamp : String
});

qnaSchema.methods.addComment = async function(comment, userID){
    const timeStamp = moment().format().toString();
    const user = await userBasicSchema.findById(userID)
    const com = new Comment({ comment : comment, 
        commentedBy : user, timeStamp : timeStamp});
    this.comments.push(com);
    await com.save();
}

const qna = mongoose.model("QNA", qnaSchema);
module.exports = qna;