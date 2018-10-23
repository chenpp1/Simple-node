var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('newslist.ejs',{title:'新闻列表',newsdata:docs});
});

module.exports = router;
