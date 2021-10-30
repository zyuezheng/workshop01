var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var shrinkr = req.app.get('shrinkr')
  res.render('index', { title: 'Express', quotes: shrinkr });
});

module.exports = router;
