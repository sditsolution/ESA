let mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const azureKeyVault = require("./azureKeyVault");

const UserController = require("./Controller/userController");
const mailController = require("./Controller/mailController");

const app = express();
const port = 3001;

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Drh774978!",
  database: "esa",
});

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.set("Cache-Control", "no-store");
  next();
});
app.use(express.json());
app.use(bodyParser.json());

//app.use(bodyParser.json());
app.set("etag", false);

// Verbindung zur Datenbank herstellen
connection.connect((err) => {
  if (err) {
    console.error("Fehler beim Verbinden zur Datenbank: ", err);
  } else {
    console.log("Erfolgreich mit der Datenbank verbunden");
  }
});

//Route User
app.get("/getUser", async (req, res) => {
  UserController.getUser(req, res, connection);
});
app.post("/signIn", async (req, res) => {
  const { firstName, email } = req.body;
  const token = await UserController.postSignIn(req, res, connection);
  mailController.sendConfirmEmail(firstName, email, token);
});

//Route registration
//TODO: Hier weiter machen, im Mail wird gesendet, aber hier gehts nicht weiter
app.get("/success/:email/:token", async (req, res) => {
  console.log("Hallo");
  const email = req.params.email;
  const token = req.params.token;
  const secretKey = await azureKeyVault.getSecret("deinSecretKeySecretName");
  const decoded = jwt.verify(token, secretKey);
  console.log("Decoded" + decoded);

  // Stelle sicher, dass der Token und die E-Mail gültig sind, bevor du die Datenbank aktualisierst.
  if (decoded) {
    const updateQuery =
      "UPDATE users SET AUTHORZIED = 1,WHERE EMAIL =? AND VERIFICATIONTOKEN=?";
    connection.query(updateQuery, [email, decoded], (error, results) => {
      if (error) {
        console.error(
          "Fehler bei der Datenbankaktualisierung: " + error.message
        );
        res.status(500).send("Fehler bei der Datenbankaktualisierung");
      } else {
        if (results.affectedRows > 0) {
          res.send("E-Mail-Verifizierung erfolgreich!");
        } else {
          res.send("Ungültige E-Mail oder Token.");
        }
      }
    });
  } else {
    console.log("Fehler");
  }
  // Sende eine Bestätigung an den Client
  res.send("E-Mail-Verifizierung erfolgreich!");

  // Du könntest auch eine HTML-Seite rendern oder eine Weiterleitung durchführen.
  res.redirect("/.success");
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
