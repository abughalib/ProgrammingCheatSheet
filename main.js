const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());
app.use(session({secret: 'Shh, its a secret!',
                        resave: true,
                        saveUninitialized: true}));

app.get('/', (req, res)=>{
    if(req.session.page_views){
        req.session.page_views++;
        res.send("You Visited this page "+ req.session.page_views+" times");
    }else{
        req.session.page_views = 1;
        res.send("Welcome tp this page for the first time!");
    }
})

app.listen(8080);