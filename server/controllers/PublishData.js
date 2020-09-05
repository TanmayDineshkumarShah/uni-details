var connection = require('./../config');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = function (req, res) {
    var sql = "SELECT * FROM Uni_details;"
    connection.query(sql, function (err, result) {
        if (err) { console.log(err) }
        else {
            console.log("All records sent");
            
            res.send(result);
        }

    });
}