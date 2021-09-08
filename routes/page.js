const express=require('express');
const services=require('./../modules/services');
const router=express.Router();
const register=require('./../modules/register');

router.get('/',(req,res,next)=>{
    res.render('index',{
        title:'Auto service'
    })
});

router.get('/services', (req,res,next)=>{
    const autoServices=services.getServices();
    res.render('services',{
        title: 'Service prices',
        services: autoServices
    });
});

router.get('/register', (req,res,next)=>{
    res.render('register',{
        title: 'Registration'
    });
});


router.get('/contact', (req,res,next)=>{
    res.render('contact',{
        title: 'Contact'
    });
});



module.exports=router;