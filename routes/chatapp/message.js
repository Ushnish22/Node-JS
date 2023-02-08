const express=require('express');

const router=express.Router();

const fs=require('fs');

router.get('/',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`message`, document.getElementById(`message`).value)" action="/message" method="POST"><input id="message" type="text" name="message"><input id="username" type="text" name="username"><button type="submit">Send</button></form>');
});

module.exports=router;