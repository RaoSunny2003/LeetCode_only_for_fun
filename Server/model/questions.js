const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  accptance: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  solutions: {
    type: String
  },
});

const QUESTIONS = mongoose.model("question", questionSchema);

module.exports = { QUESTIONS };
