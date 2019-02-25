// create express mode required for processing
const express = require("express");
const app = express();

// next we create body-parser requirement to parse UI data
const bodyParser = require("body-parser");
// next we HAVE TO SET UP PARSER LIKE THIS...
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html"); 
});

app.post("/", function(req, res) {
    
    // this gives us a parsed version of the http rquest
    // however, the returned numbers are ACTUALLY STRING (text)!
    // so we need to convert them to numbers
    var num1 = Number(req.body.num1);   // converts string to num var
    var num2 = Number(req.body.num2);
    
    
    
    
    
    var result = num1 + num2;
    res.send("The result is: " + result);
    
});

app.listen(3000, function() {
    
   console.log("Server started on port 3000"); 
    
});