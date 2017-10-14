//many servers are big monsters of code and configuration,
//this server has all components that are common to all servers

//take a look at each line and make a guess as to what each line does
//work with a person next to you and use the context/vocabulary words 
//to guess at the purpose of each line


var http = require("http");

var PORT = 7000;
var PORT2 = 7500;


function handleRequestNice(request, response) {
    var goodPhrase = ["Nice shoes.", "Nice hat.", "You're good at coding."];
    response.end("<h1>" + goodPhrase[Math.floor(Math.random() * goodPhrase.length)] + "</h1>");
}

var server = http.createServer(handleRequestNice);

server.listen(PORT, function() {

    console.log("Server listening on: http://localhost:" + PORT);
});

function handleRequestMean(request, response) {
    var badPhrase = ["Ugly shoes.", "Ugly hat.", "You suck at coding."]
    response.end("<h1>" + badPhrase[Math.floor(Math.random() * badPhrase.length)] + "</h1>");
}

var server2 = http.createServer(handleRequestMean);

server2.listen(PORT2, function() {

    console.log("Server listening on: http://localhost:" + PORT2);
});