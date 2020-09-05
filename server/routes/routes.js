var express=require('express');
var cors=require('cors');
var router=express.Router();
//router.use(cors);
var authenticateController=require('./../controllers/authenticate-controller');
var modify_delete_data=require('./../controllers/Modify_Delete_Data');
var publishData=require('./../controllers/PublishData');

var insertData=require("./../controllers/InserData");
router.post("/login",authenticateController.authenticate);
router.post("/insert-data",insertData);
router.post("/modify-uni-details",modify_delete_data.modify);
router.post("/delete-uni-details",modify_delete_data.delete);

router.get("/get-uni-details",publishData);

//router.get('/login',authenticateController.authenticate);

module.exports = router;