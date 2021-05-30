module.exports = function(app){
    app.get('/', function(req,res){
        app.src.controllers.NewsController.home(app,req,res);
    });
};