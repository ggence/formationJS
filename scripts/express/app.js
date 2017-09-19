const express = require('express')
const path = require('path')
const app = express();

var bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'vues'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/public', express.static('static'));
app.use(bodyParser.urlencoded({extended:true}));



app.get('/contact', function (req, res) {
  res.sendFile(__dirname + '/vues/contact.html');
});

app.post('/envoyerMsg', function (req, res) {
  var msg = req.body.message;
  res.render(__dirname + '/vues/response',{msg:msg});
});

app.listen(3000);



// app.get('/', function (req, res) {
//   console.log("Demande sur /");
//   res.send('Page acceuil');
// });


// app.get('/contact', function (req, res) {
//   console.log("Demande sur /contact");
//   res.send('Mon nom c\'est Guillaume');
// })

//var html = "<html><body>Test</body></html>"

// app.get('/presentation', function (req, res) {
//   res.sendFile(__dirname + '/vues/presentation.html');
// });


// app.get('/kungfucat', function (req, res) {
//   res.sendFile(__dirname + '/static/img/kungfucat.jpg');
// });

// app.post('/', function (req, res) {
//   res.send('Got a POST request')
// })



// app.use(function (req, res) {
//   res.status(404).send('page non trouvée!')
// });
