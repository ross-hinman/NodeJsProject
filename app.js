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

var famMems = require('./faminfo.json');

app.get('/family', function(req, res){
    res.render('family', {famMems: famMems});
});

app.get('/family/dad', function(req, res){
    res.render('dad', {famMems: famMems});
});

app.get('/family/mom', function(req, res){
    res.render('mom', {famMems: famMems});
});

app.get('/family/sister', function(req, res){
    res.render('sister', {famMems: famMems});
});

app.get('/contactme', function(req, res){
    res.render('contactme');
});

var mysql = require('mysql');

// app.use('/', function (req, res, next){
//     console.log('Request Url:' + req.url);

    

//     con.connect(function(err) {
//         if (err) throw err;
//         console.log("Connected!");
//         var sql = "INSERT INTO customers (name, address) VALUES ?";
//         var values = [
//           ['John', 'Highway 71']
//         ];
//         con.query(sql, [values], function (err, result) {
//           if (err) throw err;
//           console.log("Number of records inserted: " + result.affectedRows);
//         });
//       });
//     con.query("INSERT INTO nodeproject_db form_submission  (first_name, last_name, email, phone)",
//         function(err, rows){
//             if(err) throw err;
//             console.log(rows[0].First_name)
//         }
//     );
//     next();
// });

app.post('/contactme', urlencodedParser, (req, res) => {
    res.send("Thank you for your information!");
    console.log(req.body.first_name);
    console.log(req.body.last_name);
    console.log(req.body.email);
    console.log(req.body.phone);

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "nodeproject_db"
    });

    con.query("INSERT INTO nodeproject_db.form_submission  (first_name, last_name, email, phone) VALUES('"+req.body.first_name+"', '"+req.body.last_name+"','"+req.body.email+"','"+req.body.phone+"');",
        function(err, rows){
            if(err) throw err;
            console.log(rows[0])
        }
    );
  });

app.listen(port);