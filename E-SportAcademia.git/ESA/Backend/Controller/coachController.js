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
    `SELECT * from coaching, game WHERE game.idgame = coaching.GAMEID AND COACHID=? AND coaching.DATE >= CurDate()`,
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
  const {
    userID,
    description,
    twitch,
    youtube,
    instagram,
    tikTok,
    twitterX,
    accountOwner,
    bic,
    iban,
  } = req.body;
  connection.query(
    `UPDATE coach JOIN bankaccount ON coach.BANKACCOUNTID = bankaccount.idbankaccount SET coach.DESCRIPTION=?, coach.TWITCH=?, coach.YOUTUBE=?, coach.INSTAGRAM=?, coach.TIKTOK=?, coach.TWITTERX=?, bankaccount.ACCOUNTOWNER=?, bankaccount.BIC=?, bankaccount.IBAN=? WHERE idcoach=?`,
    [
      description,
      twitch,
      youtube,
      instagram,
      tikTok,
      twitterX,
      accountOwner,
      bic,
      iban,
      userID,
    ],
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
module.exports.getCoachAccount = async (req, res, connection) => {
  const { idcoach } = req.body;
  connection.query(
    `SELECT coach.IMAGE,coach.EVALUATION,coach.DESCRIPTION,coach.TWITCH,coach.YOUTUBE,coach.INSTAGRAM,coach.TIKTOK,coach.TWITTERX, bankaccount.ACCOUNTOWNER, bankaccount.BIC,bankaccount.IBAN FROM coach, bankaccount WHERE idcoach=? AND coach.BANKACCOUNTID = bankaccount.idBankAccount`,
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
module.exports.getCoachInformation = async (req, res, connection) => {
  const { userID: coachid } = req.query;
  connection.query(
    `SELECT user.INGAMENAME, DESCRIPTION,TWITCH,YOUTUBE,INSTAGRAM,TIKTOK,TWITTERX FROM coach, user WHERE idcoach=? AND coach.userID = user.USER_ID`,
    [coachid],
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
