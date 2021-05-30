function News(connection){
    this._connection = connection;
}

News.prototype.getNews = function(callback){
    this._connection.query('select * from news order by created_at desc',callback);
};
News.prototype.getNewsById = function(id,callback){
    this._connection.query('select * from news where id =' + id,callback);
};

News.prototype.saveNews = function(news,callback){
    this._connection.query('insert into news set ?', news, callback);
};

News.prototype.getLastFive = function(callback){
    this._connection.query('select * from news order by created_at desc limit 5', callback);
};

module.exports = function(){
    return News;
}