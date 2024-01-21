module.exports.getUser = async (req, res, connection) => {
  const { email } = req.body;
  connection.query(
    "SELECT * FROM user WHERE EMAIL =?",
    [email],
    (err, results) => {
      if (err) {
        console.error("Fehler bei der MySQL-Abfrage: ", err);
        res.status(500).send("Fehler beim Abrufen der Benutzerdaten");
      } else {
        res.json(results);
      }
    }
  );
};
module.exports.postSignIn = async (req, res, connection) => {
  const { firstName, lastName, inGameName, email, cryptedPassword, auth } =
    req.body;
  connection.query(
    `INSERT INTO user (NAME, LASTNAME, INGAMENAME, EMAIL, PASSWORD, AUTHORIZED) values (?, ?, ?, ?, ?,?)`,
    [firstName, lastName, inGameName, email, cryptedPassword, auth],
    (err, results) => {
      if (err) {
        console.error("Fehler bei der MySQL-Abfrage: ", err);
        res.status(500).send("Fehler beim Abrufen der Benutzerdaten");
      } else {
        res.json(results);
      }
    }
  );
};
