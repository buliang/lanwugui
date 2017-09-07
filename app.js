// var mongoose = require('mongoose');
// // connect to mongodb
// var dbName = 'movie';
// var url = 'mongodb://localhost:27017/' + dbName;
// var mongoOptions = {
//     server: {
//         socketOptions: {
//             keepAlive: 1
//         }
//     }
// };
// mongoose.connect(url, mongoOptions);
// mongoose.connection.on('error', function (err) {
//     console.log('Mongo Error:' + err);
// }).on('open', function () {
//     console.log('Connection opened');
// });

var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');
// rewrite to load static resources
app.use(express.static(path.join(__dirname, 'public')));

// static views
app.all('/*', function (req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

module.exports = app;