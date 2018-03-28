var router = require('express').Router()
var users = require('./api/users')
var analytics = require('./api/analytics')
var user = require('./api/UserController')
var quiz = require('./api/QuizController')
var category = require('./api/CategoryController')
var clients = require('./admin/clients')
var adminUsers = require('./admin/adminUsers')
module.exports = {
    // Extras
    // init: init,
    // http: http,

    // API Endpoints
    users: users,
    analytics: analytics,
    user: user,
    quiz: quiz,
    category: category,

    // Admin Endpoints
    clients: clients,
    adminUsers: adminUsers
};