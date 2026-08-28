const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.MDB_PORT || 1000;
const Task = require("./models/Tasks.js");
require("dotenv").config();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/task", (req, res) => {
  res.send("/task");
});

app.post("/task", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`localhost:${PORT}`);
});
