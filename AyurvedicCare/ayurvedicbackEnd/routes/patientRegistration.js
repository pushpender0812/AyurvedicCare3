const express = require('express');
const nodemailer = require('nodemailer');
const twilio = require('twilio')
const router = express.Router();
const jwt = require('jsonwebtoken');
const Patient = require('../model/patientRegistration')
const diseases = require('../model/treatment')
// const {disease} =require('../utills/constants');
const { emit } = require('../app');
const { AwsInstance } = require('twilio/lib/rest/accounts/v1/credential/aws');

router.post('/register',async (req, res) => {
    //register logic goes here 
    try {
        const { patient_name, fathers_name,age,gender,disease,no_of_days,contactNo,Alternate_contactNo, email,address,pincode} = await req.body;
        console.log(patient_name, fathers_name,age,gender,disease,no_of_days,contactNo,Alternate_contactNo, email,address,pincode, );
        //validate user input
        if (!(patient_name && fathers_name && age && gender && disease && no_of_days && contactNo && Alternate_contactNo && email && address && pincode)) {
            return res.send('All inputs are required')
        }   
        //check if user already exists
        // const oldUser = await Patient.findOne({ email });
        // const oldUser1 = await Patient.findOne({contactNo})
        // if (oldUser || oldUser1) {
        //     return res.send("user with this email OR Number already exists:Please Login")
        // }
       
        const patient = await Patient.create({
            patient_name:patient_name,
            fathers_name:fathers_name,
            age:age,
            gender:gender,
            disease:disease,
            no_of_days:no_of_days,
            contactNo:contactNo,
            Alternate_contactNo:Alternate_contactNo,
            email:email,
            address:address,
            pincode:pincode,
        })

        const treat = await diseases.find({"treatment":{"$eq":disease}}).select('treatment.tm')
      
        console.log(treat);
        // const complain = await ComplainSc.find();
    //    .select("first_name last_name email _id");

        /********Sending Email********** */ 
        const transporter = nodemailer.createTransport(    {
            service:"Gmail",
            auth: {
                user:"shabnamjaan1375@gmail.com",
                pass:"bbqxjypjwiiqgkil"
            }
         });

         let subject = "Hello this is test email";
         let text = "Hi how are you doing man";
         sendEmail(email,subject,text)
         function sendEmail(email,subject,text){
            const mailOptios = {
            form:"shabnamjaan1375@gmail.com",
            to:email,
            subject:subject,
            text:text
        };
        transporter.sendMail(mailOptios,function(err,info){
            if(err){
                console.log(err);
            } else {
                console.log('Email sent: ' + info.response);
                res.status(201)
            }
        });
        }

    /*************************Sending sms *************************/
    const twilioClient = twilio('ACdba00889b27f7a83e87c2d760fcde59b','c5522982e3f831b34303ede259ffd629');
    const message = "Hello There How are you doing "
    const number = "+91" + contactNo
    sendSMS(number,message);
    function sendSMS(to,message){
        twilioClient.messages.create({
            body:message,
            to:to,
            from:'+15703768469'
        })
        .then(message => console.log("SMS Sent: ", message.sid))
        .catch(error => console.log("Error Sending SMS: " , error));
     }

        
        return res.status(201).json(`Treatment sent to your mail successfully. Thanks ' ${patient.patient_name}' `);
    } catch (err) { 
        console.log(err);
    }
})

//Route for sending an email
router.post('/mail', async(req,res) =>{
 const transporter = nodemailer.createTransport(    {
    service:"Gmail",
    auth: {
        user:"shabnamjaan1375@gmail.com",
        pass:"bbqxjypjwiiqgkil"
    }
 });

 try{
    let email = await req.body.email;
    console.log(email);
    let subject = "Hello this is test email";
    let text = "Hi how are you doing man";
    if(email){
         sendEmail(email,subject,text)
    } else {
        res.send("Provide valid email")
    }

    function sendEmail(email,subject,text){
        const mailOptios = {
        form:"shabnamjaan1375@gmail.com",
        to:email,
        subject:subject,
        text:text
    };
    console.log(email);
    transporter.sendMail(mailOptios,function(err,info){
        if(err){
            console.log(err);
        } else {
            console.log('Email sent: ' + info.response);
            res.status(201)
        }
    });
    };

 } catch(err){
    console.log(err);
 }

})

//Route for sending sms
 router.get('/sms', async(req,res) =>{
    const twilioClient = twilio('ACdba00889b27f7a83e87c2d760fcde59b','c5522982e3f831b34303ede259ffd629');
    const message = "Hello There How are you doing "
    try {
        const contactNo = await req.body.contactNo;
        console.log(contactNo);
        
            if(!contactNo){
                res.json("Number is not provided")
         } else {
            sendSMS(contactNo,message);
         }
         function sendSMS(to,message){
            twilioClient.messages.create({
                body:message,
                to:to,
                from:'+15703768469'
            })
            .then(message => console.log("SMS Sent: ", message.sid))
            .catch(error => console.log("Error Sending SMS: " , error));
         }
    } catch(err){
        console.log(err);
    }
 })

router.post('/disease', async(req,res) => {
    try{
        const treatment = await req.body.treatment;
        console.log(treatment);
        if(!treatment){
            res.send('Feild is required please enter').status(401);
        } else {
            const Disease = await diseases.create({
                treatment:treatment
            })
            res.status(201).json('Treatment added successfully').send(Disease)
        }
    } catch(err) {
        console.log(err);
    }
});
module.exports = router;

