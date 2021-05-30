module.exports = function(app){
    app.get('/noticias', function(req,res){
        app.src.controllers.NewsController.listNews(app,req,res);
    });
};