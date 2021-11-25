const express = require("express");
const app = express();
const PORT = process.env.PORT || "7000";
require('dotenv').config()

app.get("/", (req, res) => {
  res.send("server up!");
});
app.get("/crash", (req, res) => {
  setTimeout(function () {
    throw new Error("We crashed!!!!!");
  }, 10);
});
app.get("/env", (req, res) => {
  return res.send(process.env.TEST)
});
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
