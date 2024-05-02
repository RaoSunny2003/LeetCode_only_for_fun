const { QUESTIONS } = require("../model/questions");

async function handleQuestionsLists(req, res) {
  // For Questions list rendering
  const allQuestions = await QUESTIONS.find({});
  res.json({ allQuestions });
}

async function handleQuestionRender(req, res) {
  // For Qusetion rendering on code place
  console.log(req.params.titleId);

  const question = await QUESTIONS.find({ title: `${req.params.titleId}` })
  // Now how can I access the data of question?
  console.log(question)
  res.json(question);
}

module.exports = { handleQuestionsLists, handleQuestionRender };
