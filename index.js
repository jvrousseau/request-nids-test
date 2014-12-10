var express = require('express');
var path = require('path');
var nids_loc = path.resolve('./data/latest.nids');
var index_loc = path.resolve('./index.html');
var app = express();


app.use(express.static(__dirname + '/'));

var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

});
