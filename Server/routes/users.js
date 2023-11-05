const express = require("express");
const {
  handleAdminRoute,
  handleUserLogIn,
  handleUserSignUp,
  handleSubmissions,
} = require("../controllers/users");

const router = express.Router();

router.post("/signup", handleUserSignUp);

router.post("/login", handleUserLogIn);

router.post("/admin", handleAdminRoute);

router.get("/submissions", handleSubmissions);

module.exports = router;
