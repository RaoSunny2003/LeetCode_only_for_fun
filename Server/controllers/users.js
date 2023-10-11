const { USERS } = require("../model/user");

function handleAdminRoute(req, res) {
  //For Admins
  console.log("Admin");
  res.json({ msg: "Admin ROUTE" });
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

function handleUserLogIn(req, res) {
  //For Login
  console.log("Login");
  res.json({ msg: "Login ROUTE" });
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
