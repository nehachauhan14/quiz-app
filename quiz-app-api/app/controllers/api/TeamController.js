const ResourceController = require("../ResourceController");
const Team = require('../../models/team')

class TeamController extends ResourceController {
    constructor(...args) {
        super(...args);
    }

}
var tc = new TeamController(Team);
team = {
    create: (req, res) => {
        try {
            if (req.body.name == "") {
                throw "Team Name is blank"
            }
            if(req.body.members.length == 0){
                throw "Members list is blank"
            }
        } catch (ex) {
            res.status(400).json(ex);
        }
        var teamObj = {
            name: req.body.name,
            members: req.body.members
        }
        tc.create(teamObj).then((result) => {
            res.status(200).json(result);
        });
    }

}

module.exports = team