const express = require('express');

const app = express();

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`)

app.get('/', (req, res, next) => {
    res.render('home');
})

app.get('/about', (req, res, next) => {
    res.render('about');
})

app.get('/works', (req, res, next) => {
    res.render('works');
})

const port = 4000;
app.listen(port, () => console.info(`Aplitacion running at port ${port}`))