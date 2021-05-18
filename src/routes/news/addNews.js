module.exports = function(app){
    app.get('/addNews', function(req,res){
        res.render('admin/form_add_news');
    });

    app.post('/news/save', function(req,res){
        var newNews = req.body;
        var connection = app.src.modules.database();
        var news = app.src.models.news;
    
        news.saveNews(newNews, connection, function(error,result){
            res.redirect('/noticias');
        });
    });
};
