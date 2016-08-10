var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//保持用户状态三个引用
//第一步
var mongoose = require('mongoose');
var session = require('express-session');
//加载 session 然后 下面的 传递了参数进去，然后就可以连接数据库了
var MongoStore = require('connect-mongo')(session);


var routes = require('./config/routes');
var config = require('./config/config');
console.log(config)

// mongoodb 数据库，数据库放在那里
// connect   连接
//第二步start mongod -dbpath D:/phpStudy/WWW/nodejs/data
mongoose.connect('mongodb://localhost/blogOne');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'htm');
app.engine( '.htm',require('ejs').__express );


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//第三步
app.use(session({
  secret: "45454",
  store: new MongoStore({
    cookieSecret: 'jdg2222hjf',
    db: 'blogOne',//  数据库名称
    host: 'localhost' // 服务器
  })
}));
// 第四步
//启动 mongoodb 服务命令
// mongod -dbpath="H:\AppServ\www\nodejs\data"





routes(app);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
