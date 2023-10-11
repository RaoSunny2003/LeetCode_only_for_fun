const express = require("express");
const {
  handleQuestionsLists,
  handleQuestionsRender,
} = require("../controllers/questions");

const router = express.Router();

router.get("/all", handleQuestionsLists);

router.get("/:id", handleQuestionsRender);

module.exports = router;
