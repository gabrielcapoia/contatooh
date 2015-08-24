var express = require('express');
var load = require('express-load');

module.exports = function (argument) {
	var app = express();

	//configuração de ambiente
	app.set('port',3000);

	//middleware
	app.use(express.static('./public'));

	load('models',{cwd:'app'})
		.then('controllers')
		.then('routes')
		.into(app);

	app.set('view engine','ejs');
	app.set('views','./app/views');

	return app;
}

