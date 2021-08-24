const router = require('express').Router();
const {Message} = require('../../models/');

router.get('/:user_id', async (req, res) => {
    const dbMessageData = await Message.findAll({
        include:{all:true,nested:true},
        where:{user_id:req.params.user_id},
    });

    const  messages  = dbMessageData.map((element, index, array)=>{
        return element.get({plain:true});
    });

          console.log("--c-> messages :" + JSON.stringify (messages) );
     console.log("---> messages length:" +  (messages).length );
    res.render('dashboard', {messages} );
});


module.exports = router;