var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');
var sensorAJSON = require('./sensorList_A.json');
var sensorBJSON = require('./sensorList_B.json');
var eventAJSON = require('./EventList_A.json');
var eventBJSON = require('./EventList_B.json');
var app = express();
var api = express();

app.set('appPort', process.env.PORT || 4567);
api.set('apiPort', process.env.PORT || 7654);
//api.use(cors());

app.use(express.static(__dirname + '/dist')); // set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser()); // pull information from html in POST
app.use(methodOverride()); // simulate DELETE and PUT
app.use(cors());


var router = new express.Router();
//Setup endpoints
router.get('/test', function(req, res) {
    var data = {
        name: 'Hello',
        date: 'die'
    }
    res.json(data);
});

//	
//	
//	/A/
//	/A/sensorList
//	/A/eventList
//	/B/
//	/B/sensorList
//	/B/eventList
//	
//	
//User A API points
router.get('/A/', function(req, res) {
    var data = {
        user: 'A',
        duration: 14,
        labels: ['Leaving', 'Toileting', 'Showering', 'Sleeping', 'Breakfast', 'Lunch', 'Dinner', 'Snack', 'Spare_Time/TV', 'Grooming'],
        places:['Bathroom', 'Bedroom', 'Entrance', 'Kitchen', 'Living'],
        rooms:4
    }
    res.json(data);
});
router.get('/A/sensorList', function(req, res) {
    res.json(sensorAJSON);
});
router.get('/A/eventList', function(req, res) {
    res.json(eventAJSON);
});
//User B points
router.get('/B/', function(req, res) {
    var data = {
        user: 'B',
        duration: 21,
        labels: ['Leaving', 'Toileting', 'Showering', 'Sleeping', 'Breakfast', 'Lunch', 'Dinner', 'Snack', 'Spare_Time/TV', 'Grooming'],
        places:['Bathroom', 'Bedroom', 'Entrance', 'Kitchen', 'Living'],
        rooms:5
    }
    res.json(data);
});
router.get('/B/eventList', function(req, res) {
    res.json(eventBJSON);
});
router.get('/B/sensorList', function(req, res) {
    res.json(sensorBJSON);
});





//Mount apps
api.use('/', router);
app.use('/api', api);


app.listen(app.get('appPort'), function() {
    console.log('****************************************');
    console.log('>> Serving AllJoyn Web App on port 4567');
    console.log('****************************************');
});

api.listen(app.get('apiPort'), function() {
    console.log('****************************************');
    console.log('>> Serving API on port 7654');
    console.log('****************************************');
});
