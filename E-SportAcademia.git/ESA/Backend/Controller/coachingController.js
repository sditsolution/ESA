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
        } else {
          res.status(500).json({ serverStatus: -2 });
        }
      }
    }
  );
};
module.exports.getBookedCoaching = async (req, res, connection) => {
  const { USER_ID } = req.body;
  connection.query(
    `SELECT coaching.idcoaching,game.IMAGE,user.INGAMENAME, coaching.TITLE, coaching.DATE, 
    coaching.START, coaching.END,coaching.DESCRIPTION, coaching.MEDIA,coaching.PRICE, game.NAME 
    FROM user, coaching, coach, coachinguser, game 
    WHERE user.USER_ID = coachinguser.USERID  
    AND coaching.gameid = game.idgame
    and coaching.idcoaching = coachinguser.COACHINGID 
    AND coachinguser.userid=? `,
    [USER_ID],
    (error, result) => {
      if (error) {
        console.log("Unable to get booked coachings");
        res.status(500).json({ serverStatus: -2 });
      } else {
        res.status(200).json(result);
      }
    }
  );
};
