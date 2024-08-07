const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {                            // with the help of this function we send mail of otp;      
    try{
            let transporter = nodemailer.createTransport({                    // we send mail with the help of transporter and here MAIL_USER , MAIL_PASS contain app password of that email which send email 
                host:process.env.MAIL_HOST,  
                port : process.env.MAIL_PORT,                          
                auth:{  
                    user: "nishantkathrotiya21@gmail.com",                           
                    pass: "vjra rlfn sjtb humv",
                }
            })
            console.log(body);
            
            let info = await transporter.sendMail({
              from: 'Charusat - by Nishant Kathrotiya',
              to:`${email}`,
              subject: `${title}`,
              html: `${body}`,
          })
        return info;
            
    }
    catch(error) {
        console.log("printing Error", error.message) ;
    }
}


module.exports = mailSender;