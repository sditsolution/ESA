var nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const azureKeyVault = require("./../azureKeyVault");

//EMAIL Adress to send email to clients
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
      html: `<h1>Account authentification</h1>
      <p>Thank you for registering with ESports Academia. To activate your account, please click on the following link:</p>
      <a href=http://localhost:3001/verification?email=${email}&token=${token}>dücke diesen link</a>
      <div> 
        <p>Please note that this activation link must be accessed within the next hour to complete your registration.\n
        If you do not activate the link within the next hour, you will need to register again.</p>
        Thank you and welcome to ESports Academia.\n\n
        Best regards,\n
        <p>The ESports Academia Team</p>
      </div>
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
            <a href=http://localhost:3001/verification?email=${email}&token=${token}>dücke diesen link</a>
            </div>`,
    })
    .catch((err) => console.log(err));
};
module.exports.changeEmail = async (req, res, connection) => {
  const { email, userName, userID } = req.body;
  const secretKey = process.env.JWT_SECRET;
  const secretKey2 = await azureKeyVault.getSecret("deinSecretKeySecretName");

  const payload = { email: email };

  const options = { expiresIn: "1h" };
  const token = jwt.sign(payload, secretKey, options);

  try {
    transporter.sendMail({
      from: "yto1@gmx.de",
      to: email,
      subject: "Änderung der Email für Ihr ESports Academia Konto",
      html: `<h1>Email ändern</h1>
            Hallo ${userName},
            <p>Bitte beachten Sie, dass Ihr neues Passwort ausreichend sicher sein sollte, indem es Groß- und Kleinbuchstaben, 
            Zahlen und Sonderzeichen enthält. Vermeiden Sie die Verwendung von leicht erratbaren Informationen wie Geburtsdaten oder Namen.</p>
            <p>Falls Sie Schwierigkeiten bei der Durchführung dieser Schritte haben oder weitere Unterstützung benötigen, stehen wir Ihnen gerne zur Verfügung. 
            Kontaktieren Sie einfach unseren Kundenservice unter reinholz.dennis@gmx.de.</p>
            <p>Vielen Dank für Ihr Verständnis und Ihr Engagement für die Sicherheit Ihres Kontos bei ESports Academia.</p>
            <p>Um dein EMail zu ändern, drück auf den folgenden link:</p>
            
            <a href=http://localhost:3000/changeEmail?token=${token}>Link zur Änderung deines Passwortes</a>

            <p>Mit freundlichen Grüßen,<br>
            ESports Academia<br>
            <br>        
            </p>  
            </div>`,
    });
    //UPDATE DATABASE EMAILCHANGE TOKEN
    connection.query(
      `UPDATE user SET EMAILCHANGETOKEN=? WHERE USER_ID=? AND NAME=? `,
      [token, userID, userName]
    );
    res.status(200).json({ serverStatus: 2 });
  } catch (err) {
    res.status(500).json({ serverStatus: -1, error: "Internal Server Error" });
  }
};
