var express=require('express');
var cors=require('cors');
var router=express.Router();
//router.use(cors);
var authenticateController=require('./../controllers/authenticate-controller');

var insertData=require("./../controllers/InserData");
router.post("/login",authenticateController.authenticate);
router.post("/insert-data",insertData);

//router.get('/login',authenticateController.authenticate);

module.exports = router;