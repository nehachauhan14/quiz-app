// # API routes
var express = require('express'),
    api = require('../controllers'),
    apiRoutes;
var path = require('path')

apiRoutes = function(router) {
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


    // router.get('/quiz/create', api.quiz.create);
    // router.get('/quiz/list', api.quiz.list);
    

    // // router.get('/quiz/:_id', api.quiz.show);
    // router.get('/quiz/update', api.quiz.update);

     router.post('/category', api.category.create);
     router.get('/category/edit/:_id', api.category.show);
    // router.post('/category/update/:_id', api.category.update);
     router.get('/category', api.category.list);


    return router;
};

module.exports = apiRoutes;