var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.sendFile("index.html", { root: path.join(__dirname, "../public/dist") });
 res.render("index.html",{current:"/"});
  });
router.get('/skills.html', function(req, res, next) {
 res.render("skills.html",{current:"skills"});
  });
router.get('/work.html', function(req, res, next) {
  res.render("work.html",{current:"work"});
  });
router.get('/about.html', function(req, res, next) {
  res.render("about.html",{current:"about"});
  });
  router.get("/resume", function(req, res) {
    res.sendFile(path.join(__dirname,'../Public/Resume.pdf'));
  });
module.exports = router;
