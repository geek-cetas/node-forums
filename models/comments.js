var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Comment = new Schema({
    subjectId : ObjectId,
    createdBy : ObjectId,
    description : String,
    createdOn : {type : Date, default : Date.now}
});

var Subject = new Schema({
    createdBy : ObjectId,
    description : String,
    tags : [String],
    createdOn : {type : Date, default : Date.now}
});

var User = new Schema({
    key : String
});

mongoose.model('Comment', Comment);
mongoose.model('Subject', Subject);
mongoose.model('User', User);

var Comment_model = mongoose.model('Comment');
var Subject_model = mongoose.model('Subject');
var User_model = mongoose.model('User');

Comment_model.prototype.madeBy = function (user) {
    if(!(user instanceof User_model))
        throw new Error("Invalid user");
    this.createdBy = user;
};

module.exports = {Comment : mongoose.model('Comment'),
                  Subject : mongoose.model('Subject'),
                  User : mongoose.model('User')
                  };
