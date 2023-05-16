const createError = require('http-errors');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 7000;
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const flash = require('connect-flash');
const dbConnection = require('./config/DB');
const dotenv = require('dotenv');
dotenv.config({path:'config.env'});



// Routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/loginRoutes');
const registerRouter = require('./routes/registerRoutes')
const vertifyRouter = require('./routes/verifyRoutes')
const shopRouter = require('./routes/shop');
const singleProductRouter = require('./routes/productSingle')
const cartRouter = require('./routes/cart');
const byAgeRouter = require('./routes/byAge')
const singleAgeRouter = require('./routes/singleByAge')
const byAgeBRouter = require('./routes/byAgeB')
const singleAgeBRouter = require('./routes/singleByAgeB')
const byAgeCRouter = require('./routes/byAgeC')
const singleAgeCRouter = require('./routes/singleByAgeC')
const byAgeDRouter = require('./routes/byAgeD')
const singleAgeDRouter = require('./routes/singleByAgeD')
const Brands = require('./routes/brands')
const singleBrand = require('./routes/singleBrand')
const Characters = require('./routes/characters')
const singleCharacter = require('./routes/singleCharacter')
const { default: mongoose } = require('mongoose');


// Express 
const app = express();

// Connectin To Date Base
  dbConnection();
  console.log(`server is running on port : ${port} `)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs' );

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'Toy Toon',
  saveUninitialized: 'false',
  resave:'false'
}));
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));



// Mount Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shop', shopRouter);
app.use('/productSingle', singleProductRouter);
app.use('/cart', cartRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/verifyUser', vertifyRouter);
app.use('/shop-by-age-0-4', byAgeRouter);
app.use('/singleByAge', singleAgeRouter );
app.use('/shop-by-age-5-7', byAgeBRouter);
app.use('/singleByAgeB', singleAgeBRouter );
app.use('/shop-by-age-8-10', byAgeCRouter );
app.use('/singleByAgeC', singleAgeCRouter );
app.use('/shop-by-age-12', byAgeDRouter );
app.use('/singleByAgeD', singleAgeDRouter );
app.use('/brands', Brands );
app.use('/single-brand', singleBrand );
app.use('/characters', Characters);
app.use('/single-character', singleCharacter );

// Mount Single Rontes

app.get('/emailUser', (req, res) => {
  
  res.render('emailUser');
});



app.get('/Home', (req, res) => {
  res.redirect('http://localhost:7000/#section_1');
});

app.get('/Offer', (req, res) => {
  res.redirect('http://localhost:7000/#section_2');
});

app.get('/ShopByAge', (req, res) => {
  res.redirect('http://localhost:7000/#section_3');
});

app.get('/ShopBrandCharacter', (req, res) => {
  res.redirect('http://localhost:7000/#section_4');
});

app.get('/About', (req, res) => {
  res.redirect('http://localhost:7000/#section_5');
});

app.get('/ContactUs', (req, res) => {
  res.redirect('http://localhost:7000/#section_6');
});


app.get('/verifyUser', (req, res) => {
  res.render('verifyUser');
});


app.get('/userHome', (req, res) => {
  res.render('userHome');
});








// catch 404 and forward to error handler
app.use((req, res, next)=> {
  next(createError(404));
});

// error handler
app.use((err, req, res, next)=> {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
