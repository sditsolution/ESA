const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Drh774978!",
  database: "esa",
});

app.get("/user", (re, res) => {
  const sql = "SELECT * FROM user";
  database.query(sql, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res, json(data);
    }
  });
});

app.get("/", (re, res) => {
  res.json("From backend");
});

app.listen(8000, () => {
  console.log("listen");
});
