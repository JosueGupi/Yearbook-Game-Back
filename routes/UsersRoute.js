const router = require('express').Router();

router.get("/test",async(req,res)=>{
    const test = {"name": "test"}
    res.json(test);
})

module.exports = router;