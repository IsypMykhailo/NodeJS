let express = require('express');
let router = express.Router();

let c = require('../../helpers/media/media-converter')

router.post('/avatar', c.avatar)
// router.post('/', c.post)
module.exports = router;