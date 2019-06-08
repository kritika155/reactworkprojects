var mysql      = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password : 'root',
    port : 3306, //port mysql
    database:'moviedb',
    connectionLimit: 10,
    supportBigNumbers: true
});

var service = {};
service.getBooking = function(callback){
  var sql = "SELECT * FROM booking";
  pool.getConnection(function(err, connection) {
    if(err) { console.log(err); callback([{}]); return; }
    // make the query
    connection.query(
      sql, function(err, results) {
      connection.release();
      if(err) { console.log(err); callback([{}]); return; }
      callback(results);
    });
  });
  //return result; //line 24 execute before db reply
};

service.addBooking = function(booking,callback) {
  pool.getConnection(function(err, connection) {
  if(err) { console.log(err); callback("fail"); return; }
  connection.query("INSERT INTO booking set ? ",booking, function(err, results) {
    if(err){
     console.log("Error Selecting : %s ",err );
     callback("fail");
    }else{
     callback("success");
   }
});
});
};






module.exports = service;