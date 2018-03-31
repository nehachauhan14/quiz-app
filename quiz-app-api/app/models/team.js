var db = require("./db")
var team = db.Schema({
    name: {
        type: String,
        required: true
    },
    members: {
        [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }]
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    }
})


module.exports = db.model("Team", team)
