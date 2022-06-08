var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/emailConfirm', function(req, res, next) {
  res.send('Thank you for email confirmation! Now you can log in');
});
module.exports = router;
