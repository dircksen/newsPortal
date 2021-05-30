
function validator(req){
    
    req.assert('title','Título é obrigatório!').notEmpty();
    req.assert('resume','Resumo é obrigatório!').notEmpty();
    req.assert('description','Descrição deve conter entre 10 a 100 caracteres').len(10,100);
    req.assert('author','Autor é obrigatório!').notEmpty();
    req.assert('news_date','Data é obrigatório!').notEmpty();

    return req.validationErrors();
}

module.exports.home = function(app, req, res){
    var connection = app.src.modules.database();
    var news = new app.src.models.news(connection);
    
    news.getLastFive(function(error,result){
        console.log(result[0]);
        res.render('home/', {data:result});
    });
}

module.exports.addNews = function(app, req, res){
    res.render('admin/form_add_news',{validations:{}, data:{}});
}


module.exports.saveNews = function(app,req,res){
    var newNews = req.body;
    var connection = app.src.modules.database();
    var news = new app.src.models.news(connection);
    var errors = validator(req);

    if(errors){
        res.render('admin/form_add_news', {validations: errors, data: newNews});
        return;
    }

    news.saveNews(newNews,function(error,result){
        res.redirect('/noticias');
    });
}

module.exports.listNews = function(app, req, res){

    var connection = app.src.modules.database();
    var news = new app.src.models.news(connection);

    news.getNews(function(error,result){
        res.render('news/', {data : result});
    });
}

module.exports.getNewsById = function(app, req, res, id){

    var connection = app.src.modules.database();
    var news = new app.src.models.news(connection);

    news.getNewsById(id,function(error,result){
        res.render('news/newsDetails', {data : result});
    });
}