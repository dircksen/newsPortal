module.exports = function(){

    this.getNews = function(connection,callback){
        connection.query('select * from news',callback);
    };
    
    this.getNewsById = function(id, connection, callback){
        connection.query('select * from news where id =' + id,callback);
    };

    return this;
}