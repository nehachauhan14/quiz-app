var db = require("./db")

var quiz = db.Schema({
    "quizName": {
        "type": String,
        "required": true,
    },
    "year": {
        "type": String
    },
    "createdAt": {
        "type": Date,
        "default": new Date(),
    }
})

module.exports = db.model("Quiz", quiz);
