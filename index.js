const express = require('express');
const app=express();

const Users=require('./data/user');

app.set('view engine' ,'ejs');// it use to to render ejs file in views folder so it is a command and can not be change//

app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send('home page')
});

app.get('/users' ,(req,res)=>{
    res.render('user',{Users})
});

app.get('/user/new',(req,res)=>{
    res.render('new')
});


app.post('/users',(req,res)=>{
    const {name,password,email,city} = req.body;
    let user = {name,password,email,city};
    Users.push(user);
    res.redirect('/users')
});


app.listen(4000,()=>{
    console.log('server is running');
})