function handleQuestionsLists(req, res) {
  // For Questions list rendering
  console.log("Qusetions");
  res.json({ msg: "QUESTIONS" });
}

function handleQuestionsRender(req, res) {
  // For Qusetion rendering on code place
  console.log(req.params.id);
  res.json({ msg: `${req.params.id}` });
}

module.exports = { handleQuestionsLists, handleQuestionsRender };
