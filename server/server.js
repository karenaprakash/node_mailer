    /**
     * Node Server 
     */
    const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();
    const {config} = require('./config/config');
    app.use(bodyParser.json());
   
    app.use(express.static('frontend/build'))

    /**
     * 
     *  Mail ---------------------------------------------  
     * 
     */
    //send email
     app.post("/api/sendMail",(req,res)=>{
        console.log(req.body)
        //nodemailer for sending mail
        const nodemailer = require('nodemailer');
        var smtpTransport = require('nodemailer-smtp-transport');

        //account from which we have to send email make sure use have allow permisions in account https://myaccount.google.com/lesssecureapps
        const transporter = nodemailer.createTransport(smtpTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            auth: {
              user:  "YOUR_USER_NAME", //config.email 
              pass:  "PASSWORD"              //config.pass //password
            }
          }));

        const mailOptions = req.body;   
       
        //transporter which send our mail                     
        transporter.sendMail(mailOptions, function(error, info){

            if(error) return res.json({
                post : false,
                info : error
            })
           
            res.status(200).json({
                post : true,
                info : info.response
            })
        });

     })
   

    if(process.env.NODE_ENV === 'production'){
        const path  =  require('path');
        app.get('/*',(req,res)=>{
            res.sendfile(path.resolve(__dirname,'frontend','build','index.html'))
        })
    }

  
    const port = process.env.PORT || 3003;
    app.listen(port,()=>{
        console.log('SERVER RUNNING.')
    })


