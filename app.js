// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8088;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// POST http://localhost:8080/api/users
// parameters sent with 

app.post('/api/users', function(req, res) {
    /*var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;*/
    var data = req.body;
    console.log(data)
    res.send(data)
    //res.send(user_id + ' ' + token + ' ' + geo);
});

app.post('/data', function(req,res) {
   var data = req.body.data;
   console.log(data)
   res.send(data)

})

// routes will go here

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
