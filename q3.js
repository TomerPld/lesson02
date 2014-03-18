var http = require('http');

http.createServer(function (request, response) {
	var queryString = new String(request.url);
	//querySplit.replace("&","?")
	var querySplit = queryString.split(?&/=);
	console.log(querySplit);
	/*
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('<span style="color:red; font-size:30px;">Hello Technion!</h1>');
	*/
}).listen(8000,'127.0.0.1');