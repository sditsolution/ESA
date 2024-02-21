const { connection } = require("mongoose");
require("dotenv").config();

module.exports.getGameKategory = async (req, res, connection) => {
  connection.query(
    `SELECT gamekategory.idgamekategory,gamekategory.KATEGORYNAME,game.NAME,game.idgame, game.KATEGORYID FROM gamekategory, game WHERE game.KATEGORYID = gamekategory.idgamekategory`,
    (error, result) => {
      if (error) {
        console.log("Unable to get game query", error);
        res.status(500).json({ serverStatus: -2 });
      } else {
        res.status(200).json(result);
      }
    }
  );
};
module.exports.getCoaches = async (req, res, connection) => {
  connection.query(
    `SELECT coach.idcoach, coach.DESCRIPTION,coach.EVALUATION,coach.IMAGE, user.INGAMENAME FROM coach,user WHERE coach.USERID = user.USER_ID`,
    (error, result) => {
      if (error) {
        console.log("Unable to get all coaches", error);
        res.status(500).json({ serverStatus: -1 });
      } else {
        res.status(200).json(result);
      }
    }
  );
};
module.exports.getGames = async (req, res, connection) => {
  connection.query(`SELECT * from game`, (error, result) => {
    if (error) {
      console.log("Unable to get game", error);
      res.status(500).json({ serverStatus: -2 });
    } else {
      res.status(200).json(result);
    }
  });
};
module.exports.getCoaching = async (req, res, connection) => {
  const { gameid } = req.body.game;
  connection.query(
    `SELECT coaching.idcoaching,coach.idcoach,coaching.TITLE,coaching.DESCRIPTION,coaching.DATE,coaching.START,coaching.END,coaching.IMAGE,coaching.BOOKEDPATICIPANT,coaching.PARTICIPANT, coaching.PRICE, user.INGAMENAME 
    FROM game, coaching, coach,user 
    WHERE coaching.GAMEID = game.idgame 
    AND coaching.COACHID = coach.idcoach
    AND coach.USERID = user.USER_ID
    AND coaching.BOOKEDPATICIPANT != coaching.PARTICIPANT
    AND game.NAME=?`,
    [gameid],
    (error, result) => {
      if (error) {
        console.log("Unable to load coachings");
        res.status(500).json({ serverStatus: -2 });
      } else {
        res.status(200).json(result);
      }
    }
  );
};
