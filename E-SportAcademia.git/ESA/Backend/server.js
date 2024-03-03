let mysql = require("mysql2");

const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const azureKeyVault = require("./azureKeyVault");
const cors = require("cors");

const UserController = require("./Controller/userController");
const mailController = require("./Controller/mailController");
const CoachController = require("./Controller/coachController");
const GameController = require("./Controller/gameController");
const CoachingController = require("./Controller/coachingController");

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

const corsOptions = {
  origin: "http://localhost:3000/login",
  optionsSuccessStatus: 200,
};

app.use(cors());

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
app.post("/getUser", async (req, res) => {
  UserController.getUser(req, res, connection);
});
app.post("/signIn", async (req, res) => {
  const { firstName, email } = req.body;
  const token = await UserController.postSignIn(req, res, connection);
  mailController.sendConfirmEmail(firstName, email, token);
});
app.post("/updateCredential", async (req, res) => {
  UserController.postProfileCredential(req, res, connection);
});
app.post("/updateAccount", async (req, res) => {
  UserController.postAccountCredential(req, res, connection);
});
app.get("/getUsercredential", async (req, res) => {
  const { credential } = req.query;
  UserController.getCredentials(req, res, connection, credential);
});
app.post("/updateUserPassword", async (req, res) => {
  const { cryptedPassword, userID } = req.body;
  UserController.postUpdateUserPassword(
    req,
    res,
    connection,
    cryptedPassword,
    userID
  );
});
app.post("/updateEmail", async (req, res) => {
  UserController.postUpdateEmail(req, res, connection);
});
app.post("/changeEmail", async (req, res) => {
  mailController.changeEmail(req, res, connection);
});
app.post("/deleteAccount", async (req, res) => {
  UserController.updateDeleteAccount(req, res, connection);
});
app.post("/joinCoach", async (req, res) => {
  UserController.postJoinCoach(req, res, connection);
});

//Route Coaching
app.post("/createCoaching", async (req, res) => {
  CoachController.postCreateCoaching(req, res, connection);
});
app.get("/getCoaching", async (req, res) => {
  CoachController.getCoaching(req, res, connection);
});

//Route registration
app.get("/verification", async (req, res) => {
  const email = req.query.email;
  const token = req.query.token;
  let decoded = "";
  try {
    const secretKey = process.env.JWT_SECRET;
    const secretKey2 = await azureKeyVault.getSecret("deinSecretKeySecretName");

    decoded = jwt.verify(token, secretKey);

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
          res.redirect("http://localhost:3000/verification");
        } else {
          res.redirect("http://localhost:3000/failedverification");
        }
      }
    });
  } catch (error) {
    console.log(error);
    res.redirect("http://localhost:3000/failedverification");
  }
});
app.get("/verifyEmailChange", async (req, res) => {
  const token = req.query.token;
  res.redirect(`http://localhost:3000/changeEmail/${token}`);
});

//Route Game
app.get("/getGameKategory", async (req, res) => {
  GameController.getGameKategory(req, res, connection);
});
app.get("/getcoaches", async (req, res) => {
  GameController.getCoaches(req, res, connection);
});
app.get("/getgames", async (req, res) => {
  GameController.getGames(req, res, connection);
});
app.post("/getCoachingData", async (req, res) => {
  GameController.getCoaching(req, res, connection);
});

//Route Coaching
app.post("/postbookCoaching", async (req, res) => {
  CoachingController.postBookCoaching(req, res, connection);
});
app.post("/getbookedCoaching", async (req, res) => {
  CoachingController.getBookedCoaching(req, res, connection);
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
