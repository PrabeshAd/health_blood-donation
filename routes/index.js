var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landing-page', { title: 'Landing-page' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/page-forgot', function(req, res, next) {
  res.render('page-forgot', { title: 'Forgot Password' });
});

router.get('/events', function(req, res, next) {
  res.render('events', { title: 'Events' });
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'Dashboard' });
});

router.get('/page-signup', function(req, res, next) {
  res.render('page-signup', { title: 'Page-signup' });
});

router.get('/profile', function(req, res, next) {
  res.render('profile', { title: 'Profile' });
});

router.get('/donor', function(req, res, next) {
  res.render('donor', { title: 'Donor List' });
});

router.get('/edit-donor', function(req, res, next) {
  res.render('edit-donor', { title: 'Edit Donor' });
});

module.exports = router;
