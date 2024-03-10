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
    `INSERT INTO coaching 
    (GAMEID,
      TITLE,
      DESCRIPTION,
      PRICE,
      PARTICIPANT,
      DATE,
      START,
      END,
      REVENUE,
      PAYMENTESA,
      MEDIA,
      BOOKEDPATICIPANT,
      COACHID) 
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
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
      0,
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
    `SELECT * from coaching, game WHERE game.idgame = coaching.GAMEID AND COACHID=?`,
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
module.exports.getCoachname = async (req, res, connection) => {
  const { coachid } = req.body;
  connection.query(
    `SELECT INGAMENAME from user,coachinguser WHERE coachinguser.USERID = user.USER_ID AND coachinguser.idcoachinguser=?`,
    [coachid],
    (error, result) => {
      if (error) {
        res.status(500).json({ serverStatus: -1 });
        console.log("Unable to get coaching", error);
      } else {
        //console.log(result);
        res.status(200).json(result);
      }
    }
  );
};
module.exports.postCoachProfile = async (req, res, connection) => {
  const { userID, description, twitch, youtube, instagram, tikTok, twitterX } =
    req.body;
  connection.query(
    `UPDATE coach SET DESCRIPTION=?, TWITCH=?, YOUTUBE=?, INSTAGRAM=?, TIKTOK=?, TWITTERX=? WHERE idcoach=?`,
    [description, twitch, youtube, instagram, tikTok, twitterX, userID],
    (error, result) => {
      if (error) {
        res.status(500).json({ serverStatus: -1 });
        console.log("Unable to update coach", error);
      } else {
        res.status(200).json({ serverStatus: 2 });
      }
    }
  );
};
module.exports.getSocials = async (req, res, connection) => {
  const { idcoach } = req.body;
  connection.query(
    `SELECT DESCRIPTION,TWITCH,YOUTUBE,INSTAGRAM,TIKTOK,TWITTERX FROM coach WHERE idcoach=?`,
    [idcoach],
    (error, result) => {
      if (error) {
        res.status(500).json({ serverStatus: -1 });
        console.log("Unable to get socials", error);
      } else {
        res.status(200).json(result);
      }
    }
  );
};
module.exports.getHistoryCoaching = async (req, res, connection) => {
  const { idcoach } = req.body;
  connection.query(
    `SELECT coaching.* FROM esa.coaching, coach WHERE coaching.Date < now() AND coaching.COACHID = coach.idcoach AND coach.idcoach =? ORDER BY coaching.DATE`,
    [idcoach],
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
