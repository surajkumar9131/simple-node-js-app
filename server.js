var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();
ig.use({
access_token: 'ACCESS_TOKEN',
});

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
    res.render('pages/index', { grams: medias });
  });
});

// app.get('/', function(req, res) {
// res.render('pages/index');
// });

app.listen(8080);
console.log('App started! Look at http://localhost:8080');
