const { QUESTIONS } = require("../model/questions");
const { USERS } = require("../model/user");

async function handleAdminRoute(req, res) {
  //For Admins
  const { title, accptance, difficulty, description, solutions } = req.body;

  const cheackDescription = await QUESTIONS.findOne({ description });
  if (cheackDescription) return res.json({ msg: "Question already Exist" });

  const cheackTitle = await QUESTIONS.findOne({ title });
  if (cheackTitle) return res.json({ msg: "title already exist" });

  await QUESTIONS.create({
    title,
    accptance,
    difficulty,
    description,
    solutions,
  });
  console.log("Admin");

  res.json({ msg: "Question Added" });
}

async function handleUserSignUp(req, res) {
  //For Signup
  const { username, email, password, userRole } = req.body;

  const cheackUsername = await USERS.findOne({ username });
  const cheackEmail = await USERS.findOne({ email });
  if (cheackUsername) return res.status(400).redirect("/signup");
  if (cheackEmail) return res.status(400).redirect("/signup");

  await USERS.create({
    username,
    email,
    password,
    userRole,
  });

  return res.redirect("/");
}

async function handleUserLogIn(req, res) {
  //For Login
  const { email, password } = req.body;

  const cheackEmail = await USERS.findOne({ email });
  if (!cheackEmail) return res.status(403).json({ error: "Invalid Email" });

  const cheackPassword = cheackEmail.password;
  if (password !== cheackPassword) {
    return res.status(401).json({ error: "Invalid Password" });
  }

  return res.redirect("/");
}

function handleSubmissions(req, res) {
  // For Submission
  console.log("Submission");
  res.json({ msg: "Submission" });
}

module.exports = {
  handleAdminRoute,
  handleUserLogIn,
  handleUserSignUp,
  handleSubmissions,
};
