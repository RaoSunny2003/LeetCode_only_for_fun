const express = require("express");
const {
  handleUserLogIn,
  handleUserSignUp,
} = require("../controllers/users");

const router = express.Router();

router.get('/signup', (req, res) => {
  return res.redirect('http://localhost:5173/signup')
})

router.post("/signup", handleUserSignUp);

router.post("/login", handleUserLogIn);

module.exports = router;
