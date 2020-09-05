var connection = require('./../config');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = function (req, res) {
    console.log(req.body);
    var uniname = req.body.uniname;
    var reg_date = req.body.registration_date;

    var exp_date = req.body.expiration_date;
    var img_url = req.body.img_url;
    var no_of_students = req.body.no_of_students;
    var email = req.body.email;
    var web_url = req.body.web_url;
    var contact_no = req.body.contact_no;

    var sql = "INSERT INTO Uni_details (uniname,registration_date,expiration_date,img_url,no_of_students,email,web_url,contact_no) VALUES ( " + '"' + uniname + '","' + reg_date + '","' + exp_date + '","' + img_url + '",' + no_of_students + ',"' + email + '","' + web_url + '",' + contact_no + " );";

    connection.query(sql, function (err, result) {
        if (err) { console.log(err) }
        else {
            console.log("1 record inserted, ID: " + result.insertId);
            res.json({
                "code": 200,
                "message": "1 record inserted, ID: " + result.insertId
            });
        }

    });
}