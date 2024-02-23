const nodemailer = require('nodemailer');

// Create a SMTP transporter object
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your_email@gmail.com',
        pass: 'your_password'
    }
});

// Define email options
let mailOptions = {
    from: 'your_email@gmail.com',
    to: ['recipient1@example.com', 'recipient2@example.com'], //here we can send multiple recepient
    subject: 'Testing Nodemailer',
    text: 'Hello from Nodemailer!'
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error occurred:', error.message);
        return;
    }
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
});
