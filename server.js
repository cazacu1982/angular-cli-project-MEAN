var express = require('express');
var path = require('path');
const http = require('http');
var morgan = require('morgan'); // logger
var bodyParser = require('body-parser');


var app = express();

// Configuration
app.use(bodyParser.json());                             // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));    // parse application/json
app.use(morgan('dev'));                                 // log requests to the console (express4)

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type, Accept, Authorization, charset');
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }

});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/reviewking');
var db = mongoose.connection;
mongoose.Promise = global.Promise;

// Models
var petSchema = mongoose.Schema({
  name: String,
  weight: Number,
  age: Number
});

var Pet = mongoose.model('Pet', petSchema);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');

  // APIs
  // select all
  app.get('/pets', function(req, res) {
    Pet.find({}, function(err, docs) {
      if(err) return console.error(err);
      res.json(docs);
    });
  });

  // count all
  app.get('/pets/count', function(req, res) {
    Pet.count(function(err, count) {
      if(err) return console.error(err);
      res.json(count);
    });
  });

  // create
  app.post('/pet', function(req, res) {
    var obj = new Pet(req.body);
    obj.save(function(err, obj) {
      if(err) return console.error(err);
      res.status(200).json(obj);
    });
  });

  // find by id
  app.get('/pet/:id', function(req, res) {
    Pet.findOne({_id: req.params.id}, function(err, obj) {
      if(err) return console.error(err);
      res.json(obj);
    })
  });

  // update by id
  app.put('/pet/:id', function(req, res) {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, function(err) {
      if(err) return console.error(err);
      res.sendStatus(200);
    })
  });

  // delete by id
  app.delete('/pet/:id', function(req, res) {
    Pet.findOneAndRemove({_id: req.params.id}, function(err) {
      if(err) return console.error(err);
      res.sendStatus(200);
    });
  });

  // Point static path to dist
  app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });

  /**
   * Get port from environment and store in Express.
   */
  const port = process.env.PORT || '3000';
  app.set('port', port);

  /**
   * Create HTTP server.
   */
  const server = http.createServer(app);

  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(port, () => console.log(`API running on localhost:${port}`));

});
