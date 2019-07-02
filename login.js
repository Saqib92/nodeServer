


module.exports = {

  login: (req, res, con) =>{
  	console.log('checking');
    let sql = "SELECT * FROM  users where (email = '"+req.body.email+"' AND password = '"+req.body.password+"')";
	  con.query(sql, function (err, result) {
	    if (err) throw err;
	    console.log(result);
	      res.json({"status": "true", "message": "User Found", "data" : result[0]});
	    
	  });
  }

};