const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const static = require('serve-static');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '7dnjf29dlf!',
    database : 'javaweb',
});

conn.connect();


app.use(static(path.join(__dirname,'/')));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080);

app.get('/test', function(req,res){
    //res.redirect('infinityScroll.html');
    console.log("aa");
    const sql = 'select mname from members';
    conn.query(sql, function(err, topics, fields){
        if(err){
            console.log(err);
            res.status(500).send('Internal Error');
        }else{
            console.log(topics);
            res.render('plan',{topics:topics});
        }
    })
});
http.createServer(app).listen(app.get('port'),function(){
    console.log('Server Start... ' + app.get('port'));
});