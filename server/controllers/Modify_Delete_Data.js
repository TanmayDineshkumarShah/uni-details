var connection = require('./../config');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports.modify = function (req, res) {
    var id = req.body.uid;
    var uniname = req.body.uniname;
    var reg_date = req.body.registration_date.substring(0,10);

    var exp_date = req.body.expiration_date.substring(0,10);
    var img_url = req.body.img_url;
    var no_of_students = req.body.no_of_students;
    var email = req.body.email;
    var web_url = req.body.web_url;
    var contact_no = req.body.contact_no;

    var sql = "UPDATE Uni_details SET uniname=" + '"' + uniname + '", registration_date="' + reg_date
        + '",expiration_date="' + exp_date + '",img_url="' + img_url + '", no_of_students=' + no_of_students + ', email="' + email
        + '", web_url="' + web_url + '",contact_no=' + contact_no + ' WHERE uid=' + id + ';';

    connection.query(sql, function (err, result) {
        if (err) { console.log(err) }
        else {
            console.log("1 record modified, ID: " + result.insertId);
            res.json({
                "code": 200,
                "message": "1 record modified, ID: " + result.insertId
            });
        }

    });
}

module.exports.delete = function (req, res) {
    var id = req.body.uid;
    var sql = "DELETE FROM Uni_details WHERE uid=" + id + ";";
    connection.query(sql, function (err, result) {
        if (err) { console.log(err) }
        else {
            console.log("1 record deleted ");
            res.json({
                "code": 200,
                "message": "1 record deleted"
            });
        }

    });
}