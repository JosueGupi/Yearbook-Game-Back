const router = require('express').Router();
const UserModel = require('../models/Users')

router.get("/test",async(req,res)=>{
    const test = {"name": "test"}
    res.json(test);
})
router.get("/getUsers",async(req,res)=>{
    /*UserModel.createCollection().then(function (collection) { 
        console.log('Collection is created!'); 
    });*/
    const result = await UserModel.find({});
    console.log(result)
    res.json(result);
    
})
router.post("/login",async(req,res)=>{
    const user = {
        "username":req.body.username,
        "password":req.body.password
    }
    const result = await UserModel.aggregate([{$match:{username:{$eq:user.username}}},
        {$match:{password:{$eq:user.password}}}])
    
    if (result[0] === undefined){
        res.status(401).send('Usuario invalido')
    }
    else{
        res.json(result)
    }
})
module.exports = router;