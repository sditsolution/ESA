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
      subject: "yTo: Verifizierung",
      html: `<h1>E-Mail Verifizierung</h1>
            Hallo ${name},
            <p>vielen Dank für deine Registrierung. Bitte klicke auf den Link, um deine Registrierung abzuschließen!</p>
            <a href=http://localhost:3000/success/${email}/${token}> Zu yTo</a>
            </div>`,
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
