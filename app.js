var express = require('express'),
    mongoose = require('mongoose'),
    path = require('path'),
    bodyParser = require('body-parser');

var db = mongoose.connect(' ');

//console.log(db);

var Project = require('./models/projectModel');
var User = require('./models/userModel');

var app = express();

app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var projectfyRouter = express.Router();

projectfyRouter.route('/users').get(function(req,res){
    
    User.find(,function(err,users){
       if(err){
           res.status(500).send(err);
       }else{
          res.json(users);
       } 
    });
})


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
    