var mongoose = require('mongoose');

var init = function() {
    console.log("Initializing");
    mongoose.connect('mongodb://localhost/comments');
}

module.exports = {init : init};
