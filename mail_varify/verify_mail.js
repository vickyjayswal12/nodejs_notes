import nodemailer from "nodemailer";
import { generateVerificationToken } from "./verifytToken";

export const verifymail = (tomailer,role) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "workmodi789@gmail.com",//email 
      pass: "cuqm ocxc ahbi teuk", //password
    },
  });
  const token = generateVerificationToken(tomailer);

  var mailOptions = {
    from: "workmodi789@gmail.com",
    to: tomailer,
    subject: "Sending Email using Node.js",
    text: "That was easy!",
    html: `<p>Click <a href="http://localhost:3001/${role}/verify?email=${tomailer}&token=${token}">here</a> to verify your email.</p>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
