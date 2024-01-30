var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "mail.gmx.net",
  port: 587,
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
  auth: {
    user: "yto1@gmx.de",
    pass: "Alaskafilet007",
  },
});

module.exports.sendConfirmEmail = (name, email, token) => {
  transporter
    .sendMail({
      from: "yto1@gmx.de",
      to: email,
      subject: "ESA: Verifizierung",
      html: `<h1>Account authentification</h1>,
      <p>Thank you for registering with ESports Academia. To activate your account, please click on the following link:</p>
      <a href=http://localhost:3001/verification?email=${email}&token=${token}/>
      <p>Please note that this activation link must be accessed within the next hour to complete your registration.</p>
      <p>If you do not activate the link within the next hour, you will need to register again.</p>
      <p>Thank you and welcome to ESports Academia.</p>
      <p>Best regards,</p>
      <p>The ESports Academia Team</p>
      `,
    })
    .catch((err) => console.log(err));
};

module.exports.sendResetMail = (email, token) => {
  transporter
    .sendMail({
      from: "yto1@gmx.de",
      to: email,
      subject: "yTo: Passwort zurücksetzen",
      html: `<h1>Passwort zurücksetzen</h1>
            Hallo,
            <p>im Folgendem befindet sich der 6-stellige Code. Bitte gib diesen auf der Website ein.</p>
            
            <p>Bestätigungscode: ${token}</p>
            </div>`,
    })
    .catch((err) => console.log(err));
};
