module.exports = function(app){
    app.get('/noticia', function(req,res){
        app.src.controllers.NewsController.getNewsById(app,req,res,6);
    });
};