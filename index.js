const express = require("express");

const app = express();
app.use(express.json());

const number = 0;
const num = number;

// function getRandomInt(max) {
//   return Math.floor(Math.random() * 100);
// }

// console.log(getRandomInt());

app.get("/guess", (req, res) => {
  if (num <= 100) {
    console.log(req.query);
    res.json({ messsage: "number recived" });
  } else if (num > 100) {
    console.log("Le chiffre doit être inférieur à 100");
  } else if (num < 0) {
    console.log("Le chiffre doir être suprieur ou égla à 0");
  } else {
    console.log("Veuillez renseigner un nombre");
  }
});

app.listen(3000, () => {
  console.log("Server started");
});
