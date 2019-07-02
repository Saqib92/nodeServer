


module.exports = { 
  login: (req, res, con) =>{
  	if(!validateEmail(req.body.email)){
  		res.json({status: false, message: 'Correct Email Required'});
  		return false;
  	}
  	if(req.body.password == undefined || req.body.password == ''){
  		res.json({status: false, message: 'Password Required'});
  		return false;
  	}

	let sql = "SELECT * FROM  users where (email = '"+req.body.email+"' AND password = '"+req.body.password+"')";
	con.query(sql, (err, result)=>{	
		if (err) throw err;
		if(result.length > 0){
			res.json({"status": true, "message": "User Found", "data" : result[0]});
		}else{
			res.json({"status": false, "message": "User Not Found"});
		}
	});
  }

};
function validateEmail(mail){
	console.log('validate called');
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
		return (true)
	}
	return (false)
}