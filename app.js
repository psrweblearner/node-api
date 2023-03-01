const express = require('express');
const app =express();
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 5000

// express static path
const path =require('path');
const staticpath = path.join(__dirname,"../public");
//middleware
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));
// app.use(express.static(staticpath));
// set template engine path
app.set("view engine","hbs");
// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    port: 465,               // true for 465, false for other ports
    host: "smtp.gmail.com",
       auth: {
            user: 'singhpushkar44@gmail.com',
            pass: 'yduscevptdszxbya',
         },
    secure: true,
    });

    app.post('/mail-test',(req,res)=>{
        const mailData = {
            from: 'singhpushkar44@gmail.com',  // sender address
              to: 'pushkar.singh@inchbrick.com',   // list of receivers
              subject: 'Sending Email using Node.js',
              text: 'That was easy!',
              html: '<b>Hey there! </b> <br> This is our first message sent with Nodemailer<br/>',
            };
            transporter.sendMail(mailData, function (err, info) {
                if(err)
                  console.log(err)
                else
                //   console.log(info);
                res.send("mail send successfully")
             });
    })
app.get('/',(req,res)=>{
    // res.render("index");
    res.send("Hello this is express js project");
});
app.listen(PORT,()=>{
    console.log(`Example app listening at http://localhost:${PORT}`);
})