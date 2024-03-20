const bcrypt = require("bcryptjs");
require("dotenv").config();

const jwt = require("jsonwebtoken");
const azureKeyVault = require("./../azureKeyVault");

module.exports.getUser = async (req, res, connection) => {
  const { email } = req.query;
  const { frontendPassword } = req.body;

  try {
    const result = await queryUserByEmail(connection, email);
    const rawdata = result[0];
    const data = { ...rawdata };
    const { PASSWORD: pw } = data;

    const isMatch = await comparePasswords(frontendPassword, pw);

    if (isMatch) {
      res.status(200).send(data);
    } else {
      res.status(500).send({ serverStatus: -1 });
    }
  } catch (err) {
    console.error("Fehler bei der Abfrage: ", err);
    res.status(500).send("Fehler beim Abrufen der Benutzerdaten");
  }
};
async function queryUserByEmail(connection, email) {
  return new Promise((resolve, reject) => {
    //reference to coach because of coachid in beACoach component
    connection.query(
      "SELECT PASSWORD,AUTHORZIED,USER_ID,PASSWORD,USERCREDENTIAL,INGAMENAME, LASTNAME,NAME, coach.idcoach FROM user, coach WHERE user.USER_ID = coach.USERID AND EMAIL =?",
      [email],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
}
async function comparePasswords(plainPassword, hashedPassword) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(plainPassword, hashedPassword, (err, isMatch) => {
      if (err) {
        reject(err);
      } else {
        resolve(isMatch);
      }
    });
  });
}
module.exports.postSignIn = async (req, res, connection) => {
  const { firstName, lastName, inGameName, email, cryptedPassword, auth } =
    req.body;

  const secretKey = process.env.JWT_SECRET;
  const secretKey2 = await azureKeyVault.getSecret("deinSecretKeySecretName");

  const payload = { email: email };

  const options = { expiresIn: "1h" };
  const token = jwt.sign(payload, secretKey, options);

  connection.query(
    `INSERT INTO credential (PHONE,STREET,PLZ,COUNTRY,NATION,DATEOFBIRTH) VALUES (?,?,?,?,?,?)`,
    [null, null, null, null, null, null],
    (error, credentialResult) => {
      if (error) {
        console.log(error);
        // Behandle den Fehler
        res.status(500).send("Fehler beim Einfügen in credential");
      } else {
        const insertedCredentialId = credentialResult.insertId;

        // Füge den neuen Benutzer in die user-Tabelle ein und setze den Fremdschlüssel
        connection.query(
          `INSERT INTO user (NAME, LASTNAME, INGAMENAME, EMAIL, PASSWORD, AUTHORZIED, VERIFICATIONTOKEN, USERCREDENTIAL) VALUES (?, ?, ?, ?, ?, ?,?,?)`,
          [
            firstName,
            lastName,
            inGameName,
            email,
            cryptedPassword,
            auth,
            token,
            insertedCredentialId,
          ],
          (err, userResults) => {
            if (err) {
              console.error("Fehler bei der MySQL-Abfrage: ", err);
              // Behandle den Fehler
              res.status(500).send("Fehler beim Abrufen der Benutzerdaten");
            } else {
              res.json(userResults);
            }
          }
        );
      }
    }
  );
  return token;
};
module.exports.getCredentials = async (req, res, connection, credentialId) => {
  connection.query(
    `SELECT * FROM credential WHERE idcredential=?`,
    [credentialId],
    (error, result) => {
      if (error) {
        console.error(error);
      } else {
        const rawdata = result[0];
        const data = { ...rawdata };
        res.status(200).send(data);
      }
    }
  );
};
module.exports.postProfileCredential = async (req, res, connection) => {
  const { userCredentialId, birthDate, phone, adress, plz, country, nation } =
    req.body;
  connection.query(
    `UPDATE credential SET PHONE=?, STREET=?, PLZ=?, COUNTRY=?, NATION=?, DATEOFBIRTH=? WHERE idcredential=?`,
    [phone, adress, plz, country, nation, birthDate, userCredentialId],
    (error, result) => {
      if (error) {
        console.error("Fehler bei der MySQL-Abfrage: ", error);
        // Behandle den Fehler, z.B. sende eine Fehlermeldung an den Client
        res.status(500).send("Fehler beim Aktualisieren der Daten");
      } else {
        res.json(result);
      }
    }
  );
};
module.exports.postAccountCredential = async (req, res, connection) => {
  const { NotifyChecked, language, idcredential } = req.body;

  //NotifyChecked false = notification on , true = notification off
  //Mysql 0 = false and 1 = true
  connection.query(
    `UPDATE credential SET NOTIFICATION=?, LANGUAGE =? WHERE idcredential=? `,
    [!NotifyChecked, language, idcredential],
    (error, result) => {
      if (error) {
        console.log("Update failed", error);
      } else {
        res.json(result);
      }
    }
  );
};
module.exports.postUpdateUserPassword = async (
  req,
  res,
  connection,
  newPassword,
  userid
) => {
  connection.query(
    `UPDATE user SET PASSWORD=? WHERE USER_ID=?`,
    [newPassword, userid],
    (error, result) => {
      if (error) {
        console.log("Update password failed", error);
      } else {
        res.json(result);
      }
    }
  );
};
module.exports.postUpdateEmail = async (req, res, connection) => {
  const { token, confirmedEmail } = req.body;

  connection.query(
    `UPDATE user SET EMAIL =? WHERE EMAILCHANGETOKEN =?`,
    [confirmedEmail, token],
    (error, result) => {
      if (error) {
        res.status(500).json({ serverStatus: -1 });
      } else {
        res.status(200).json({ serverStatus: 2 });
      }
    }
  );
};
module.exports.updateDeleteAccount = async (req, res, connection) => {
  //TODO: Credentials müssen auch gelöscht werden
  const { userID } = req.body;
  connection.query(
    `DELETE FROM user WHERE USER_ID = ?`,
    [userID],
    (error, result) => {
      if (error) {
        res.status(500).json({ serverStatus: -1 });
      } else {
        res.status(200).json({ serverStatus: 2 });
      }
    }
  );
};
module.exports.postJoinCoach = async (req, res, connection) => {
  const { userID } = req.body;
  const description = null;
  const image = null;
  const evalutation = null;
  console.log(userID);
  connection.query(
    `INSERT INTO coach (DESCRIPTION,IMAGE,EVALUATION,USERID) VALUES (?,?,?,?)`,
    [description, image, evalutation, userID],
    (error, result) => {
      if (error) {
        console.log("Unable to insert into coach", error);
        res.status(500).json({ serverStatus: -1 });
      } else {
        console.log("Updated");
        res.status(200).json({ serverStatus: 2 });
      }
    }
  );
};
