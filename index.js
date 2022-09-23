const express = require('express');
const app= express();
var path = require('path')

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render("index");
});
app.get('/portifolio', (req, res) =>{
    res.render("portifolio");
});
app.get('/contato', (req, res) =>{
    res.render("contato");
});


app.listen(3000, ()=> { console.log ('App rodando')});