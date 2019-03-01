// app.js
const express = require('express');
const bodyParser = require('body-parser');
// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://Amon:benson32@cluster0-0mv60.mongodb.net/test?retryWrites=true';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const driver = require('./routes/drivers.route'); // Imports routes for the drivers
const route = require('./routes/routes.route'); // Imports routes for the routes
const app = express();
const router = express.Router();
app.use(bodyParser.json({type: "*/*"}));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/drivers', driver);
app.use('/routes', route);
route.get('/', function(req, res){
    res.render('index.html');
})

let port = 8009;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});