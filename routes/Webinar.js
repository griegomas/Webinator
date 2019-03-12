var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Webinars = require('../models/Webinars.js');
var passport = require('passport');
require('../config/passport')(passport);

/* GET ALL BOOKS */
/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
  Webinars.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* SAVE BOOK */
router.post('/', function(req, res, next) {
  Webinars.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
