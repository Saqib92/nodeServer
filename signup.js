module.exports = {

  signup: (req, res, con) =>{
  	if(req.body.name == undefined || req.body.name == ''){
  		res.json({status: false, message: 'Name Required'});
  		return false;
  	}
  	if(!validateEmail(req.body.email)){
  		res.json({status: false, message: 'Correct Email Required'});
  		return false;
  	}
  	if(req.body.password == undefined || req.body.password == ''){
  		res.json({status: false, message: 'Password Required'});
  		return false;
  	}

	let sql = "SELECT * FROM  users where (email = '"+req.body.email+"')";
	con.query(sql, (err, result)=> {
		if (err) throw err;

		if(result.length > 0){
			res.json({status: false, message: 'Email Already Exists'})
		}else{
			
			let sql = "INSERT INTO users (name, email, password) VALUES ('"+req.body.name+"', '"+req.body.email+"', '"+req.body.password+"');";
			con.query(sql, (err, result)=>{
				if (err) throw err;
				console.log(result)
				res.json({status: true, message:'User Signup Successfull'});
			})			
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