const express = require("express");
const cors = require("cors");

let app = express();
app.use(cors());

app.get("/indianCricketTeam", (req, res) => {
  let indianCricketTeam = [
    "Virat Kohli",
    "Rohit Sharama",
    "Kl Rahul",
    "Hardik Pandya",
    "Jasprit Bumrah",
    "Rishabh Pant",
    "Jadeja",
  ];

  res.json(indianCricketTeam);
});

app.get("/ausCricketTeam", (req, res) => {
  let ausCricketTeam = [
    "Smith",
    "Warner",
    "Head",
    "Starc",
    "Cummins",
    "Maxwell",
  ];

  res.json(ausCricketTeam);
});

app.listen(4567, () => {
  console.log("listening to port 4567");
});
