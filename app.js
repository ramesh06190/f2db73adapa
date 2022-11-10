var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var machinesRouter = require('./routes/machines');
var gridbuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
var machines = require("./models/machines");
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/machines', machinesRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/selector', selectorRouter);
app.use("/resource",resourceRouter);


//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  await machines.deleteMany();
  let instance1 = new
  machines({MachineType:"Refrigerator",Capacity:1,useType:"Domestic",Energy:"solar"});
  instance1.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("First object saved")
  });
  let instance2 = new
  machines({MachineType:"Washing Machine",Capacity:5,useType:"Industrial",Energy:"Electrical"});
  instance2.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("Second object saved")
  });
  let instance3 = new
  machines({MachineType:"Cutting Machine",Capacity:10,useType:"Industrial",Energy:"Electrical"});
  instance3.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("Third object saved")
  });
  }
  let reseed = true;
  if (reseed) { recreateDB();}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
