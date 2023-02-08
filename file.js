const http=require('http');

const express=require('express');

const bodyParser=require('body-parser');

const app=express();

const loginRoutes=require('./routes/chatapp/login');
const messageRoutes=require('./routes/chatapp/message');

app.use(bodyParser.urlencoded({extended:false}));

app.use(loginRoutes);
app.use(messageRoutes);

/*app.use((req,res,next) => {
    res.status(404).send('<h1>Page Not Found</h1>');
});*/

app.listen(5000);