var express = require('express');
var router = express.Router();
var Service = require('../services/bookingdbservice');
var bookingList=[{id:1,name:'indira',year:2000},{id:2,name:'kritika',year:2001}]
router.get('/', function(req, res, next) {
  var callback = function(result){
    res.send(result);
  }
Service.getBooking(callback);
});


router.post('/', function(req, res, next) {
  var callback = function(result){
    res.send({'result':result});
  }
  var booking = req.body;
  Service.addBooking(booking, callback);
});




module.exports = router;
