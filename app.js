var express = require("express");
var fs = require("fs");

var app = express();

const host = "localhost";
const port = 8806;

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('./views/dist'));
app.locals.pretty = true;

app.get('/',(req,res) => {
    res.render('welcome');
});

app.listen(port,() => {
    console.log(`server running at http://${host}:${port}`);
})