const path=require('path');

const http=require('http');

const express=require('express');
const bodyParser=require('body-parser');

const app=express();


const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const contactRoutes=require('./routes/contactus');
const successRoutes=require('./routes/success');

app.set('view engine', 'ejs');
app.set('views' , 'views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname , 'public')));

app.use('/admin', adminRoutes);
app.use(contactRoutes);
app.use(successRoutes);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(5000);