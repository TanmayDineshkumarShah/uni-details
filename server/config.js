var mysql=require('mysql');

var connection=mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'admin',
    database : 'Universities'
});

connection.connect(function(err){
    if(!err){
        console.log("Database is connected");

    }
    else{
        console.log("Error while connecting database : "+err.stack)
    }
});

module.exports=connection;