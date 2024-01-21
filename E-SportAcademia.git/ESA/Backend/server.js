// app.js

const express = require("express");
const bodyParser = require("body-parser");
let mysql = require("mysql");

const UserController = require("./Controller/userController");
const { connect } = require("mongoose");

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
app.get("/users", async (req, res) => {
  UserController.getUser(req, res, connection, req.query.email);
});
app.post("/signIn", async (req, res) => {
  UserController.postSignIn(req, res, connection);
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
