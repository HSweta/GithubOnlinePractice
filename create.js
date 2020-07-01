var mysql=require('mysql')
var conn=mysql.createConnection({
    host:"localhost",
    password:"",
    user:"root",
});

conn.connect(function(err)
{
    if(err) throw err;
    console.log('connected!!');
    var sql="CREATE DATABASE person";
    conn.query(sql,function(err,result)
    {
        if(err) throw err;
        console.log('Database Created !!');
    });

});