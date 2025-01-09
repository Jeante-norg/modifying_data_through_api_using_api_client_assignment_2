const express = require("express");
const route = express.Router();
const {
  create,
  readALL,
  update,
  deleteItem,
} = require("../controller/menu.controller.js");

route.post("/create", create);
route.get("/get", readALL);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteItem);

module.exports = route;
