const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  userRol: {
    type: String,
    unique: false
  },
});

const USERS = mongoose.model("user", userSchema);

module.exports = { USERS };
