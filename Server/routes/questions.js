const express = require("express");
const {
  handleQuestionsLists,
  handleQuestionRender,
} = require("../controllers/questions");

const router = express.Router();

router.get("/all", handleQuestionsLists);

router.get("/:titleId", handleQuestionRender);

module.exports = router;
