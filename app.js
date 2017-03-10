var express = require('express'),
    mongoose = require('mongoose'),
    path = require('path'),
    bodyParser = require('body-parser');

var MongoClient = require('mongodb').MongoClient;

var dbins; 
    
MongoClient.connect("mongodb://test:tester123@ds123050.mlab.com:23050/projectone", function (err, db) {
    
    if(err){
        console.log('error while connecting to mongo db:::'+err);
    }else{
        dbins = db;
        console.log('we are connected:::::'+dbins);
    }
});

//var db = mongoose.connect(' ');

//console.log(db);

var Project = require('./models/projectModel');
var User = require('./models/userModel');

var app = express();

app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var projectfyRouter = express.Router();

projectfyRouter.route('/users').get(function(req,res){
    
    console.log('call from angular:::'+req.body);
    
     var coll = dbins.collection('users', function(err, collection) {});
        coll.find().toArray(function(err, items) {
            res.json(items);
        });
})

function getUsers(){
    
    
    
}


        
        
    
                





app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use('/api',projectfyRouter);


app.get('/', function(req,res){
   
   console.log("sendiing html for the path /");
   res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function(err){
    console.log("running server on from gulp port:::::::"+port);
});
    