const Mongoose = require("mongoose");

const MegaFunkSchema = new Mongoose.Schema({
  title: String,
  url: String
});

module.exports = Mongoose.model("Megafunkdb", MegaFunkSchema, "megafunk");