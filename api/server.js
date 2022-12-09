const url = require('url');
var express = require('express');
var cors = require('cors')
var app = express();
const bodyParser = require('body-parser');

const port=3001

//allow CORS for all requests
app.use(cors()) 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.status(501).send('Not implemented');
});

app.post('/sensordata/:sensor', function(req,res){
    var data=(JSON.stringify(req.body.data)).replace(/\"/g, '\'');
    console.log("Data Received: "+data)
    res.send(data)
})

app.use(function(req, res, next) {
    res.status(404).send("Not Found");
});

// start server on port
app.listen(port, function () {
    console.log('Server app listening on port ' + port);
});