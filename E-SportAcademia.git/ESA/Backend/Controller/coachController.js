const { connection } = require("mongoose");

require("dotenv").config();

module.exports.postCreateCoaching = async (req, res, connection) => {
  const {
    gameIndex,
    title,
    selectedDate: date,
    selectedStartTime: start,
    selectedEndTime: end,
    price,
    participant,
    paymentESA,
    revenue,
    description,
    media,
    userID,
  } = req.body;
  connection.query(
    `INSERT INTO coaching (GAMEID,TITLE,DESCRIPTION,PRICE,PARTICIPANT,DATE,START,END,REVENUE,PAYMENTESA,MEDIA,COACHID) 
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      gameIndex,
      title,
      description,
      price,
      participant,
      date,
      start,
      end,
      revenue,
      paymentESA,
      media,
      userID,
    ],
    (error, result) => {
      if (error) {
        res.status(500).json({ serverStatus: -1 });
        console.log("Unable insert coaching", error);
      } else {
        res.status(200).json({ serverStatus: 2 });
      }
    }
  );
};
module.exports.getCoaching = async (req, res, connection) => {
  const { userID } = req.query;
  connection.query(
    `SELECT * from coaching WHERE COACHID=?`,
    [userID],
    (error, result) => {
      if (error) {
        res.status(500).json({ serverStatus: -1 });
        console.log("Unable to get coaching", error);
      } else {
        res.status(200).json(result);
      }
    }
  );
};
