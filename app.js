var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended : false});
var jsonParser = bodyParser.json();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use('/assets', express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
    console.log('Request Url:' + req.url);
    next();
});

app.get('/', function(req, res){
    res.render('index');
});

app.get('/aboutme', function(req, res){
    res.render('aboutme');
});

app.get('/food', function(req, res){
    res.render('food');
});

app.get('/cats', function(req, res){
    res.render('cats');
});

app.get('/family', function(req, res){
    res.render('family');
});

app.get('/family/dad', function(req, res){
    res.render('dad');
});

app.get('/family/mom', function(req, res){
    res.render('mom');
});

app.get('/family/sister', function(req, res){
    res.render('sister');
});

app.get('/contactme', function(req, res){
    res.render('contactme');
});

app.post('/contactme', urlencodedParser, (req, res) => {
    res.send("Thank you for your information!");
    console.log(req.body.first_name);
    console.log(req.body.last_name);
    console.log(req.body.email);
    console.log(req.body.phone);
  });

app.listen(port);