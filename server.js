var express = require('express');
var app = express();

app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(express.static('public'));



  var albums = [
    {
      title: 'Cupid Deluxe',
      artist: 'Blood Orange'
    },
    {
      title: 'M3LL155X - EP',
      artist: 'FKA twigs'
    },
    {
      title: 'Fake History',
      artist: 'letlive.'
    }
  ];

  var taquerias = [
    { name: "La Taqueria" },
    { name: "El Farolito" },
    { name: "Taqueria Cancun" }
  ];

// app.get('/', function(req, res){
//   console.log('GET /');
//   res.send('Hello World');
// });

app.get('/', function(req, res){
res.sendFile('views/index.html', {root:__dirname});

console.log(__dirname);
});

app.get('/api/albums', function(req,res){
	res.send(albums);
});

app.get('/api/taquerias', function(req, res){
  res.json(taquerias);
});



app.listen(3000, function(){
	console.log('listening at 3000');
});

