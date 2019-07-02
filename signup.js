module.exports = {

  signup: (req, res, con) =>{
  	console.log('checking');
    let sql = "SELECT * FROM  users where (email = '"+req.body.email+"')";
	  con.query(sql, function (err, result) {
	    if (err) throw err;
	    
	    if(result.length > 0){
	    	res.json({status: false})
	    }else{
	    	res.json({status: true, message: 'User Inserted'})
	    }
	  });
  }

};