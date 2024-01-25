require("dotenv").config();
const jwt = require("jsonwebtoken");
const azureKeyVault = require("./../azureKeyVault");

module.exports.getUser = async (req, res, connection) => {
  const { email } = req.query;
  connection.query(
    "SELECT PASSWORD FROM user WHERE EMAIL =?",
    [email],
    (err, results) => {
      if (err) {
        console.error("Fehler bei der MySQL-Abfrage: ", err);
        res.status(500).send("Fehler beim Abrufen der Benutzerdaten");
      } else {
        const rawdata = results[0];
        // Umwandeln des RowDataPacket-Objekts in ein JSON-Objekt
        const data = { ...rawdata };
        res.status(200).send(data);
      }
    }
  );
};

module.exports.postSignIn = async (req, res, connection) => {
  const { firstName, lastName, inGameName, email, cryptedPassword, auth } =
    req.body;

  const secretKey = process.env.JWT_SECRET;
  const token = jwt.sign({ email: email }, secretKey, { expiresIn: "1h" });

  connection.query(
    `INSERT INTO user (NAME, LASTNAME, INGAMENAME, EMAIL, PASSWORD, AUTHORZIED, VERIFICATIONTOKEN) values (?, ?, ?, ?, ?, ?,?)`,
    [firstName, lastName, inGameName, email, cryptedPassword, auth, token],
    (err, results) => {
      if (err) {
        console.error("Fehler bei der MySQL-Abfrage: ", err);
        res.status(500).send("Fehler beim Abrufen der Benutzerdaten");
      } else {
        res.json(results);
      }
    }
  );
  return token;
};
