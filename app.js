const express=require('express'); // Prisidedam biblioteka
const path = require('path');
const hbs=require('hbs'); // template engine 'handlebars'

//routes
const pageRoute=require('./routes/page');
const adminRouter=require('./routes/admin');

const viewsPath=path.join(__dirname,'views','templates');
const partialsPath=path.join(__dirname,'views','partials');
const publicPath=path.join(__dirname,'public');

const app=express();

app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.urlencoded({extended:false}));
app.use(express.static(publicPath)); 
app.use(adminRouter);
app.use(pageRoute);

app.listen(3000);