var comment = require('./models/comments').Comment,
    user = require('./models/comments').User,
    conn = require('./models/init').init,
    oid = require('mongoose').Schema.ObjectId;

function newComment() {
    conn();
    com = new comment();
    u = new user();
    u.key = "dummy_key";
    user.findById('4dc6d34c89f0a63518000002', function(er, us) {
    console.log("User id : " + us);
    com.madeBy(us);
    com.description = "Dummy";
    com.save(function(err) {
        console.log("ERROR : " + err);
        console.log(com.id);
        return;
    });
});
};

newComment();
