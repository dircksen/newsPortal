module.exports = function(app){
    app.get('/noticia', function(req,res){

        var connection = app.src.modules.database();
        var news = app.src.models.news;

        news.getNewsById(2,connection,function(error,result){
            res.render('news/newsDetails', {newsDetails : result});
        });

    });
};