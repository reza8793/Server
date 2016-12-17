var http = require('http'); // require HTTP module

var PORT1 = 7000; // port that we use to listen on, mysql uses 3306

var PORT2 = 7500;

// handle requests and responses

function handleRequest1 (request, response) {

	response.end("It works,path hit : you like the smell of success" + request.url);
	//response.end (" you like the smell of success");

}
function handleRequest2 (request, response) {

	response.end("It works,path hit: but you may wana work on your smell, buy a cologne, jk " + request.url);

}

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function() {

	console.log("server is listening on http://localhost:%s", PORT1);

});

server2.listen(PORT2, function() {

	console.log("server is listening on http://localhost:%s", PORT2);

});