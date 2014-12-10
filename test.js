var fs = require('fs');
var path = require('path');
var request = require('request');
var rfs = fs.readFileSync('./data/latest.nids');

var url = 'http://localhost:3000/data/latest.nids';

request({url: url, encoding: null}, function(error, response, body) {
    if (error) throw error;
    console.log('readFileSync buffer length: ' + rfs.length);
    console.log('request buffer length: ' + body.length);
});
