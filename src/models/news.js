module.exports = function(){

    this.getNews = function(connection,callback){
        connection.query('select * from news',callback);
    };
    
    this.getNewsById = function(id, connection, callback){
        connection.query('select * from news where id =' + id,callback);
    };

    this.saveNews = function(news, connection, callback){
        connection.query('insert into news set ?',news, callback);
    };

    return this;
}