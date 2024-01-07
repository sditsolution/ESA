module.exports.getUser = async (req, res) => {
  connection.query("SELECT * FROM user", (err, results) => {
    if (err) {
      console.error("Fehler bei der MySQL-Abfrage: ", err);
      res.status(500).send("Fehler beim Abrufen der Benutzerdaten");
    } else {
      res.json(results);
    }
  });
};
