import { v4 as uuidv4 } from "uuid";
const verificationTokens = {};

export const generateVerificationToken = (tomailer) => {
  const token = uuidv4();
  verificationTokens[tomailer] = token;
  return token;
};

export const verifyVerificationToken = (token, tomailer, req, res) => {
  if (verificationTokens[tomailer] === token) {
    // Email verified successfully
    delete verificationTokens[tomailer]; // Remove token from memory

    // You can update your database to mark the email as verified

    res.status(200).send("Email verified successfully.");
  } else {
    res.status(400).send("Invalid verification token.");
  }
};
