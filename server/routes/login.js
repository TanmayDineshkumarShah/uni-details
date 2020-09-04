var express=require('express');
var cors=require('cors');
var router=express.Router();
router.use(cors);
var authenticateController=require('./../controllers/authenticate-controller');

router.post('/login',cors(),authenticateController.authenticate);
module.exports = router;