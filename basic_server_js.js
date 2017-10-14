//many servers are big monsters of code and configuration,
//this server has all components that are common to all servers

//take a look at each line and make a guess as to what each line does
//work with a person next to you and use the context/vocabulary words 
//to guess at the purpose of each line

//
var http = require("http");
// 
var PORT = 7000;
var PORT2 = 7500;
// 
function handleRequest(request, response) {
  // 
  response.end("You're a good coder.");
}
// 
var server = http.createServer(handleRequest);
// 
server.listen(PORT, function() {
  //
  console.log("Server listening on: http://localhost:" + PORT);
});
// 
function handleRequest2(request, response) {
  // 
  response.end("You suck at coding.");
}
// 
var server2 = http.createServer(handleRequest2);
// 
server2.listen(PORT2, function() {
  //
  console.log("Server listening on: http://localhost:" + PORT2);
});