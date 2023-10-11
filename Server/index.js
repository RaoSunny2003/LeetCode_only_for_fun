const express = require("express");
const questionsRoute = require("./routes/questions");
const userDataRoute = require("./routes/users");
const { connectMongoDB } = require("./connect");
const { handleUserSignUp } = require("./controllers/users");
const app = express();
const PORT = 3000;

// Parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Your route or middleware that uses req.body
app.post("/signup", handleUserSignUp);

app.use("/questions", questionsRoute);

app.use("/", userDataRoute);

app.get("/", (req, res) => res.json({ msg: "HOME PAGE" }));

connectMongoDB()
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => console.log("ERROR in connnection of mongoDB", err));

app.listen(PORT, () => console.log(`Server is running on port no ${PORT}`));
