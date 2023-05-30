const express = require("express");

const app = express();
app.use(express.json());

const getRandomInt = () => {
  return Math.floor(Math.random() * 100);
};

// console.log(getRandomInt());

const randomNum = getRandomInt();
console.log(randomNum);

app.get("/guess", (req, res) => {
  //   console.log(typeof req.query.num);

  if (req.query.num > 100) {
    return res.status(400).json("Le chiffre doit être inférieur à 100");
  } else if (req.query.num < 0) {
    return res.status(400).json("Le chiffre doir être suprieur ou égale à 0");
  } else if (Number(req.query.num) === randomNum) {
    return res.status(200).json("Le chiffre est trouvé");
  } else if (req.query.num < randomNum) {
    return res.status(400).json("Le chiffre est supérieur");
  } else if (req.query.num > randomNum) {
    return res.status(400).json("Le chiffre est inférieur ");
  }
});

app.listen(3000, () => {
  console.log("Server started");
});
