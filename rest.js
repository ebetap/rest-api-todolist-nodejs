const mysql = require('mysql');

function REST_ROUTER(router,pool,md5){
	var self = this;
	this.handleRoutes(router,pool,md5);
}

REST_ROUTER.prototype.handleRoutes = function(router,pool,md5) {
	router.get('/',function(req,res){
		res.json({'Message' : 'toDoList REST API'})
	});

	//CREATE TODO LIST
	router.post('/addlist', function(req, res) {
		var query = 'INSERT INTO ??(??,??,??,??,??) VALUES (?,?,?,?,?)';
		var table = ['todo_app','name','priority','location','username','password',req.body.name,req.body.priority,req.body.location,req.body.username,md5(req.body.password)];
		query = mysql.format(query,table);
		pool.query(query, function(err,rows){
			if(err){
				res.json({'Message' : 'Failed to add user!'})
			}else{
				res.json({'Message' : 'User succesfully added!'})
			}
		});
	});

	//GET ALL Todo List Data
	router.get('/todolist', function(req, res){
		var query = 'SELECT name,priority,location,time_start FROM ??';
		var table = 'todo_app';
		query = mysql.format(query,table);
		pool.query(query, function(err,rows){
			if(err){
				res.json({'Message' : 'There is an error when execute query :' + err})
			}else{
				res.json({'Message' : 'Success','todolist' : rows})
			}
		});
	});

	//GET TODOLIST by username
	router.get('/todolist/:username', function(req, res){
		var query = 'SELECT name,priority,location,time_start,username FROM ?? WHERE ?? = ?';
		var table = ['todo_app','username',req.params.username];
		query = mysql.format(query,table);
		pool.query(query, function(err,rows){
			if(err){
				res.json({'Message' : 'There is an error when execute query :' + err})
			}else{
				res.json({'Message' : 'Success','todolist' : rows})
			}
		});
	});

	//UPDATE TODOLIST time_start by username
	router.put('/todolist/:username',function(req,res){
		var query = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        var table = ['todo_app','time_start',req.body.time_start,'username',req.params.username];
        query = mysql.format(query,table);
        pool.query(query, function(err,rows){
        	if(err){
        		res.json({'Message' : 'Error : ' + err});
        	}else{
        		res.json({'Message' : 'Todo list succesfully updated'});
        	}
        });
	});

	//FITUR SORTING eg: /api/todolist/prioritysort/asc
	router.get('/todolist/:username/prioritysort/:sort',function(req, res){
		var query = 'SELECT * FROM todo_app ORDER BY priority '+ req.params.sort;
		// var table = ['todo_app','username',req.params.username,req.params.sort];
		// query = mysql.format(query,table);
        pool.query(query, function(err,rows){
        	if(err){
        		res.json({'Message' : 'Error : ' + err});
        	}else{
        		res.json({'Message' : 'Success','data': rows});
        	}
        });		
	});
}

module.exports = REST_ROUTER;