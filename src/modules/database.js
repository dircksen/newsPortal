var mysql = require('mysql');

var connMySQL = function(req,res){
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '1234',
        database: 'newsportal'
    });
}

module.exports = function(){
    return connMySQL;
};