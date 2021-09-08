const express=require('express');
const router=express.Router();
const register=require('./../modules/register');

router.post('/admin', (req,res,next)=>{
    register.addRegister(req.body.brand,req.body.model,req.body.year,req.body.phone,req.body.date,req.body.message);
    res.redirect('/register');
});

router.get('/admin', (req,res,next)=>{
    const reg=register.getRegister();
    res.render('admin',{
        title: 'Registrations',
        register: reg
    });
});

router.post('/delete',(req,res,next)=>{
    register.deleteRegister(req.body.nr,1);
    res.redirect('/admin');
})
module.exports=router;