const ResourceController = require("../ResourceController");
const Quiz = require('../../models/quiz')

class QuizController extends ResourceController {
  constructor(...args) {
    super(...args);
  }
  // update(req, res) {
  //     res.send('update called from class')
  // }        
}
var qc = new QuizController(Quiz);
qc.list();

quiz = {
  create: (req, res) => {
    var quizObj = {
      quizName: req.body.quizName,
      year: req.body.year
    }
    qc.create(quizObj).then((result) => {
      res.send(result);
    });
  },
  list: (req, res) => {
    qc.index().then((result) => {
      res.send(result.sort());
    });
  },
  show: (req, res) => {
    qc.show(req.params._id).then((result) => {
      res.send(result);
    });
  },
  update: (req, res) => {
    qc.update(req).then((result) => {
      res.send(result);
    });
  },
  delete: (req, res) => {
    qc.delete(req.params._id).then((result) => {
      res.send(result);
    });
  }
}

// module.exports = qc
module.exports = quiz
