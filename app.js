require ('dotenv').config();

const express  = require('express');
const expressLayout = require('express-ejs-layouts');

const app  = express ();
const PORT = 5000 || process.env.PORT;
// const res = require('express/lib/response');
app.use(express.static('public'));


// Tempalate Engine
app.use(expressLayout);
app.set('layout', './layout/main');
app.set('view engine', 'ejs');


app.use('/', require('./server/routes/main'));

app.listen(PORT, ()=> {
    console.log(`app listen on port ${PORT}`);
});