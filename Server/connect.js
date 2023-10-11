const mongoose = require("mongoose");

async function connectMongoDB() {
  mongoose.connect("mongodb://127.0.0.1:27017/leetcode");
}

module.exports = { connectMongoDB };
