var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landing-page', { title: 'landing' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

router.get('/page-forgot', function(req, res, next) {
  res.render('page-forgot', { title: 'forgot' });
});

router.get('/page-signup', function(req, res, next) {
  res.render('page-signup', { title: 'page-signup' });
});

module.exports = router;
