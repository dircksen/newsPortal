module.exports = function(app){
    app.get('/addNews', function(req,res){
        app.src.controllers.NewsController.addNews(app,req,res);
    });

    app.post('/news/save', function(req,res){
        app.src.controllers.NewsController.saveNews(app,req,res);
    });
};
