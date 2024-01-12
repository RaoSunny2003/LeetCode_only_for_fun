const express = require("express");
const {
  handleQuestionsLists,
  handleQuestionRender,
} = require("../controllers/questions");

const {
  handleAdminRoute,
  handleSubmissions,
} = require("../controllers/users");

const router = express.Router();

router.get("/all", handleQuestionsLists);

router.get("/:titleId", handleQuestionRender);

router.post("/admin", handleAdminRoute);

router.get("/submissions", handleSubmissions);

module.exports = router;
