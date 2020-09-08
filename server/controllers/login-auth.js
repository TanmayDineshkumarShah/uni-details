var jwt=require('jsonwebtoken');
module.exports=function (req, res){
    // console.log(req.headers.authorization);
    var array=req.headers.authorization.split(" ");

    var token=array[1];
    //console.log(token);
    jwt.verify(token,'secret123',function(err,decoded){
        if(err){
            
            console.log(err);
            return res.status(500).send({auth:false,message:"failed to authenticate"});

        }
        res.status(200).send(decoded);
    })
}