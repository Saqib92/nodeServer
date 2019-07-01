


module.exports = {

  foo: function (email, pass, con, res) {
  	console.log('checking')
    let sql = "SELECT * FROM  users where (email = '"+email+"' AND password = '"+pass+"')";
	  con.query(sql, function (err, result) {
	    if (err) throw err;
	    console.log(result);
	      res.json({"status": "true", "message": "User Found", "data" : result[0]});
	    
	  });
  }

};