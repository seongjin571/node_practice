const express = require('express');
const http = require('http');
const path = require('path');
const static = require('serve-static');

const app = express();

app.use(static(path.join(__dirname,'/')));

app.set('port', process.env.PORT || 8080);
app.get('/', function(req,res){
    res.redirect('index.html');
});
http.createServer(app).listen(app.get('port'),function(){
    console.log('Server Start... ' + app.get('port'));
});