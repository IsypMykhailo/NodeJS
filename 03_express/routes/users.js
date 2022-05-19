let express = require('express');
let router = express.Router();

let profile = require('../controllers/profile')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/updateAvatar', profile.updateAvatar)

module.exports = router;
