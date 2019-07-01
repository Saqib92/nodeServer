
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');
var mysql = require('mysql');
 
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());
const fileUpload = require('express-fileupload');

// import Modules/Controllers

var login = require('./login');


//connecting to DataBase
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'nodetest'
});

//to connect to database.
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  // To Create DataBase umcomment this.
/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});*/

/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE users (email VARCHAR(255), password VARCHAR(255), phone VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});*/



app.listen(process.env.PORT || 8081);
  


app.post('/signup', function(req, res) {

function addUser(email, pass, phone){

  var sql = "INSERT INTO users (email, password, phone) VALUES ('"+email+"', '"+pass+"', '"+phone+"')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
      res.json({"status": "true", "message": "User Inserted"});
    
  });


}
   var email = req.body.email;
    var pass = req.body.password;
    var phone = req.body.phone

addUser(email, pass, phone);

   

});

app.post('/abc', (req, res)=>{
	let con2 = con;
	login.foo(req.body.email, req.body.password, con2, res);
 //   res.json({"hello":"world"})
})


