const express = require('express');
const mysql = require('mysql');
const md5 = require('md5');
const rest = require('./rest.js');
const bodyParser = require('body-parser');
const app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);
	
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
	
    res.setHeader('Content-Encoding', 'gzip');

    next();
});

function Rest() {
	var self = this;
	self.konekDB();
}

Rest.prototype.konekDB = function() {
	var self = this;
	var mysqlAuth = mysql.createPool(
		{
			host 			: 'localhost',
			user			: 'root',
			password		: 'namamu',
			database		: 'todo',
		}
	);
	self.confExpress(mysqlAuth);
}

Rest.prototype.confExpress = function(mysqlAuth) {
	var self = this;
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());
	var router = express.Router();
	app.use('/api/v1',router);
	var restRouter = new rest(router,mysqlAuth,md5);
	self.startServer();
}

Rest.prototype.startServer = function() {
	app.listen(3000, function(){
		console.log('Server started at port 3000');
	});
}

Rest.prototype.stop = function (err) {
	if(err) throw err;
}

new Rest();
