const { connection } = require("mongoose");
require("dotenv").config();

module.exports.postBookCoaching = async (req, res, connection) => {
  const { coachingid } = req.body;
  let tempbooked;
  connection.query(
    `SELECT PARTICIPANT, BOOKEDPATICIPANT FROM coaching WHERE idcoaching=?`,
    [coachingid],
    (error, result) => {
      if (error) {
        console.log("Unable to get coaching", error);
      } else {
        const rawdata = result[0];
        const data = { ...rawdata };
        tempbooked = data.BOOKEDPATICIPANT;
        if (data.PARTICIPANT > data.BOOKEDPATICIPANT) {
          connection.query(
            `UPDATE coaching set BOOKEDPATICIPANT=? where  idcoaching=?`,
            [tempbooked + 1, coachingid],
            (error, result) => {
              if (error) {
                console.log(`Unable to book coaching with id ${coachingid}`);
                res.status(500).json({ serverStatus: -2 });
              } else {
                res.status(200).json({ serverStatus: 1 });
              }
            }
          );
        }
      }
    }
  );
};
