// main do projeto...

// Includes...

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); 



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testimonialsRouter = require('./routes/testimonials');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // Concatena diferentes caminhos..
app.set('view engine', 'ejs'); // Templete de tela...

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(path.resolve('./public'))); // Complemento para os arquivos estáticos....

// Configuação das rotas... é usados quanto tem multiplos arquivos de rotas...
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testimonials', testimonialsRouter);

// catch 404 and forward to error handler
// Configuração do erro...
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
