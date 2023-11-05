const { QUESTIONS } = require("../model/questions");

async function handleQuestionsLists(req, res) {
  // For Questions list rendering
  const allQuestions = await QUESTIONS.find({});
  res.json({ allQuestions });
}

function handleQuestionRender(req, res) {
  // For Qusetion rendering on code place
  console.log(req.params.titleId);
  res.json({ msg: `${req.params.titleId}` });
}

module.exports = { handleQuestionsLists, handleQuestionRender };
