// # API routes
var express = require('express'),
    api = require('../controllers'),
    apiRoutes;
var path = require('path')

apiRoutes = function (router) {
    router = express.Router();

    // ## User Auth
    // router.post('/users/signup', api.users.signup);
    // router.post('/users/session', api.users.session);
    // router.get('/users/signin', api.users.signin);
    // router.get('/users/signout', api.users.signout);

    // // ## Analytics
    // router.get('/analytics/users', api.analytics.totalCountOfUsers);

    // ## User    
    router.post('/user/signup', api.user.signup);
    router.post('/user/session', api.user.session);
    router.get('/user/signin', api.user.signin);
    // router.get('/user/create', api.user.create);
    // router.get('/user/list', api.user.list);
    // router.get('/user/:_id', api.user.show);


    router.post('/quiz', api.quiz.create);
    router.get('/quiz', api.quiz.list);
    router.get('/quiz/edit/:_id', api.quiz.show);
    router.post('/quiz/update/:_id', api.quiz.update);
    router.put('/quiz/delete/:_id', api.category.delete);

    router.post('/category', api.category.create);
    router.get('/category/edit/:_id', api.category.show);
    router.post('/category/update/:_id', api.category.update);
    router.get('/category', api.category.list);
    router.put('/category/delete/:_id', api.category.delete)

    // Questions Controller
    router.get("/question/create", api.question.create);
    router.get("/question/index", api.question.index);
    router.get("/question/randomQuestion", api.question.randomQuestion);
    router.get("/question/generatedQuestions", api.question.generatedQuestions);
    router.get("/question/nextQuestion", api.question.nextQuestion);
    return router;
};

module.exports = apiRoutes;