const express = require('express');

const fs=require('fs');

const router=express.Router();

router.get('/login',(req,res,next) => {
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/message" method="POST"><input id="username" type="text" name="username"><button type="submit">Login</button></form>');
});

router.post('/message',(req,res,next) =>{
    fs.appendFileSync('notes.txt', `${req.body.username}:${req.body.message}`);
    //console.log(data);
    console.log(`${req.body.username}:${req.body.message}`)
    res.redirect('/');
});

module.exports=router;