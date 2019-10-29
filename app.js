var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

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

// app.post('/person', urlencodedParser, function(req,res){
//     res.send('Thank you!');
//     console.log(req.body.first_name);
//     console.log(req.body.last_name);
// });

// app.post('/personjson', jsonParser, function(req, res){
//     res.send('Thank you for the JSON data!');
//     console.log(req.body.first_name);
//     console.log(req.body.last_name);
// });

app.post('/form', (req, res) => {
    const first_name = req.body.first-name;
    const last_name = req.body.last-name;
    const phone = req.body.phone;
    const email = req.body.email;
  });

app.listen(port);