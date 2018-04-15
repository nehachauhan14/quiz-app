const ResoureController = require("./../ResourceController");
const Question = require("./../../models/question");

class QuestionController extends ResoureController {
  constructor(...args) {
    super(...args);
    this.listAllQuestions; // store list of all questions from DB
    this.totalQuestions; // obtain total number of questions in the list
    this.random;
  }
}

let ques = new QuestionController(Question);

let question = {
  "create": (req, res, next) => {
    ques
      .create((function (req, res) {
        return req.body;
      }(req, res)))
      .then((result) => {
        res
          .status(200)
          .json({ "status": "SUCCESS" });
      })
      .catch((e) => {
        res
          .status(404)
          .json({ "status": "BAD REQUEST" });
      });
  },

  // Method to GET list of all questions
  "index": (req, res, next) => {
    ques
      .index()
      .then((result) => {
        createProps(result);
        res
          .status(200)
          .json({
            "status": "SUCCESS",
            "total": result.length,
            "result": result
          });
        next();
      })
      .catch((e) => {
        res
          .status(404)
          .json({ "status": "BAD REQUEST" });
      })

    function createProps(result) {
      this.listAllQuestions = result;
      this.totalQuestions = listAllQuestions.length;
      this.random = new Array(totalQuestions);
      this.idx = 0;
    }
  },

  // Method to GET a random question
  "randomQuestion": (req, res, next) => {
    function generateRandomQuestion(req, res, next) {
      var random = generateRandomNumberRecursive(this.random, this.random.length);
      this.listAllQuestions[random].isAsked = true;
      res
        .status(200)
        .json({
          "status": "SUCCESS",
          "random_number": random,
          "random_question": this.listAllQuestions[random]
        });
      next();
    };

    function generateRandomNumberRecursive(random, length) {
      var num = Math.floor(Math.random() * this.totalQuestions);
      // if length is 0 then, return 0
      if (length === 0) { // <- terminating condition
        return 0;
      }
      if (random.includes(num) === true) {
        return generateRandomNumberRecursive(random, (length - 1));
      } else {
        random.push(num);
        return num;
      }
    }

    generateRandomQuestion(req, res, next);
  },

  // Method to GET list of all generated/asked questions
  "generatedQuestions": (req, res, next) => {
    function generatedQuestions(req, res, next) {
      var result = [];
      this.listAllQuestions.forEach((ele) => {
        if (ele.isAsked === true) {
          result.push(ele);
        }
      });
      res
        .status(200)
        .json({
          "status": "SUCCESS",
          "total": result.length,
          "collection": result
        });
    };

    generatedQuestions(req, res, next);
  },

  // send (next) question
  "nextQuestion": (req, res, next) => {
    function foo(req, res, next) {
      if (this.idx < this.totalQuestions) {
        this.listAllQuestions[this.idx].isAsked = true;
        res
          .status(200)
          .json({
            "status": "SUCCESS",
            "question_number": this.idx,
            "question": this.listAllQuestions[this.idx]
          });
        this.idx++;
      }
      res
        .status(200)
        .json({
          "status": "SUCCESS",
          "question_number": (this.idx - 1),
          "question": this.listAllQuestions[this.idx - 1]
        });
    };

    foo(req, res, next);
  }
};

module.exports = question;
