// app.js

const express = require("express");
let mysql = require("mysql");

const app = express();
const port = 3001;

// MySQL-Verbindung erstellen
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Drh774978!",
//   port: 3306,
// });

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

// app.use(bodyParser.json());
app.set("etag", false);

// Verbindung zur Datenbank herstellen
connection.connect((err) => {
  if (err) {
    console.error("Fehler beim Verbinden zur Datenbank: ", err);
  } else {
    console.log("Erfolgreich mit der Datenbank verbunden");
  }
});

// Beispiel-Route
app.get("/users", (req, res) => {
  // MySQL-Abfrage ausführen
  connection.query("SELECT * FROM user", (err, results) => {
    if (err) {
      console.error("Fehler bei der MySQL-Abfrage: ", err);
      res.status(500).send("Fehler beim Abrufen der Benutzerdaten");
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
