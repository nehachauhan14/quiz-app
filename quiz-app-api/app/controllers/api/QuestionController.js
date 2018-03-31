var ResoureController = require("./../ResourceController");
var Question = require("./../../models/question");
var jwt = require("jwt-simple");
var config = require("../../../config/config.js");

class QuestionController extends ResoureController {
  constructor(...args) {
    super(...args);
    this.listAllQuestions; // store list of all questions from DB
    this.totalQuestions; // obtain total number of questions in the list
    this.random;
  }
}

var ques = new QuestionController(Question);

let question = {
  "create": (req, res, next) => { // USE DUMMY_QUESTIONS.JS INSTEAD
    ques
      .create({})
      .then((result) => {
        res.send(result);
      })
      .catch((e) => {
        res.send(e);
      })
  },

  // Method to GET list of all questions
  "index": (req, res, next) => {
    ques
      .index()
      .then((result) => {
        createProps(result);
        res.send(result);
        next();
      })
      .catch((e) => {
        res.send(e);
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
      // console.log(this.random);
      this.listAllQuestions[random].isAsked = true;
      res.send(this.listAllQuestions[random]);
      next();
    };

    function generateRandomNumberRecursive(random, length) {
      var num = Math.floor(Math.random() * this.totalQuestions);
      // if length is 0 then, return 0
      if (length == 0) { // <- terminating condition
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

  // Method to GET list of generated questions
  "generatedQuestions": (req, res, next) => {
    function generatedQuestions(req, res, next) {
      var result = [];
      this.listAllQuestions.forEach((ele) => {
        if (ele.isAsked == true) {
          result.push(ele);
        }
      });
      res.send(result);
    };

    generatedQuestions(req, res, next);
  },

  // send (next) question
  "nextQuestion": (req, res, next) => {
    function foo(req, res, next) {
      if (this.idx < this.totalQuestions) {
        this.listAllQuestions[this.idx].isAsked = true;
        res.send(this.listAllQuestions[this.idx]);
        this.idx++;
      }
      res.send(this.listAllQuestions[this.idx - 1]);
    };

    foo(req, res, next);
  }
};

module.exports = question;
