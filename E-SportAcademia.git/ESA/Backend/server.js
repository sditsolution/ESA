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

app.get("/checkIfAuthenticated", async (req, res) => {
  //Authenticated from user von loginForm
  //res.send(true oder false)
});

//Route registration

app.get("/success", async (req, res) => {
  const email = req.query.email;
  const token = req.query.token;
  let decoded = "";
  try {
    const secretKey = process.env.JWT_SECRET;
    const secretKey2 = await azureKeyVault.getSecret("deinSecretKeySecretName");

    decoded = jwt.verify(token, secretKey2.value);
    console.log(decoded);

    // Stelle sicher, dass der Token und die E-Mail gültig sind, bevor du die Datenbank aktualisierst.
    const updateQuery = "UPDATE user SET AUTHORZIED = 1 WHERE EMAIL =?";
    connection.query(updateQuery, [email], (error, results) => {
      if (error) {
        console.error(
          "Fehler bei der Datenbankaktualisierung: " + error.message
        );
        res.status(500).send("Fehler bei der Datenbankaktualisierung");
      } else {
        if (results.affectedRows > 0) {
          res.redirect("http://localhost:3000/success");
        } else {
          res.send("Ungültige E-Mail oder Token.");
        }
      }
    });
  } catch (error) {
    console.log("Error first Catch:" + error);
    // Du könntest auch eine HTML-Seite rendern oder eine Weiterleitung durchführen.
    //res.redirect("/.success");
  }
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
