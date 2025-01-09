const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const express = require("express");
const { resolve } = require("path");
const mongoose = require("mongoose");
const route = require("./route/menu.route.js");

const app = express();
const port = process.env.PORT || 3010;

app.use(express.static("static"));
app.use(express.json());

mongoose
  .connect(process.env.CONN_STR, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => {
    console.log("DATABASE CONNECTED SUCCESSFULLY!");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "pages/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use("/menu", route);
