var app = require('./src/modules/server')
require('./src/routes/news')(app);
require('./src/routes/news/addNews')(app);
require('./src/routes/home')(app);

app.listen(3000, function(req, res){
    console.log('Server ON');
});