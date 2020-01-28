var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Gartico - Login', method: req.method});
});

router.post('/', function(req, res,next) {
    res.render('login', {title: 'Gartico - Login', method: req.method})
});

module.exports = router;
