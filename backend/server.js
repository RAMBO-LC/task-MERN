const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`localhost:${PORT}`);
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("ERROR IN MongoDB"));
