require("dotenv").config();
require('./config/database').connect();
const express = require('express');
const app = express();
const cors = require('cors')
const patientRoute = require('./routes/patientRegistration');
const feedbak = require('./routes/feedback')
// const qrcodeRouter = require('./routes/Qr');
// app.set('view engine', 'ejs')
// app.engine('ejs', require('ejs').__express);
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('/AyuervedicCare'))
app.use(express.static('/AyuervedicCare/js'))

app.use(cors({
    origin:"*"
}
));
// app.use(express.json({ limit: "50mb" }));

// app.get('/form', (req,res) => {
//     // res.sendFile(__dirname + './AyurvedicCare/confirmation.html')
//     res.send("hello")
// })


app.use('/user',patientRoute);
app.use('/get',feedbak);
module.exports = app;
