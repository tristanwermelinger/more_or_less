const express = require("express");

const app = express();
app.use(express.json());

const number = 0, 100;
const num = number;

app.get("/guess", (req, res) => {
  if (num <= 100) {
    console.log(req.query);
    res.json({ messsage: "number recived" });
  } else if (num >= 0) {
    console.log(req.query);
  }
});

app.listen(3000, () => {
  console.log("Server started");
});
