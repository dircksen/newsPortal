module.exports = function(app){
    app.get('/noticias', function(req,res){
        var connection = app.src.modules.database();
        var news = app.src.models.news;
    
        news.getNews(connection, function(error,result){
            res.render('news/', {news : result});
        });
    });
};