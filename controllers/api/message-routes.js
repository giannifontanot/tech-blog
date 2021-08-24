const router = require('express').Router();
console.log(__filename);

router.get('/newMessage',(req,res)=>{
    res.render('newMessage',);

});

router.post('/saveMessage',(req,res)=>{
    res.render('dashboard');

});

module.exports = router;