const Feedback =  require('../model/feedback')
const express = require('express');
const router =express.Router();
// const bodyParser = require('body-parser');
// router.use(bodyParser.json());
router.post('/feedback',async(req,res) => {
    try{
        const {name,email,phoneNo,satisfaction,feedback} =await req.body;
        if(!(email&&feedback&&satisfaction)){
            return res.status(401).json("Feilds with star mark are required ");
        }
        const feedbacks = await Feedback.create({
            name:name,
            email:email,
            phoneNo:phoneNo,
            satisfaction:satisfaction,
            feedback:feedback
        });
        console.log(feedbacks);
        return res.status(201).json(`Submitted`);

    }catch(err){
        console.log(err)
    }
})


router.get('/feedback',async(req,res) => {
    try{
        const feedback =  await Feedback.find({});
        return res.status(201).json("The feebacks are found successfully ");
    }
    catch(err){
        console.log(`Can't find feedback due to this error${err}`)
    }
})
module.exports = router;