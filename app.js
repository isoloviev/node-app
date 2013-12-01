/**
 * Module dependencies.
 */

var express = require('express'),
    http = require('http'),
    path = require('path'),
    app = express();

// all environments
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function (req, res) {
    res.render('index', {});
});

app.get('/about', function (req, res) {
    res.render('about', {});
});

app.get('/contacts', function (req, res) {
    res.render('contacts', {});
});

http.createServer(app).listen(app.get('port'), function () {
    console.log(
        'Express server listening on port ' + app.get('port')
    );
});
