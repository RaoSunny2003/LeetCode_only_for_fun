const express = require("express");
const questionsRoute = require("./routes/questions");
const userRoute = require("./routes/users");
const { connectMongoDB } = require("./connect");
const { handleUserSignUp, handleUserLogIn } = require("./controllers/users");
const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/questions", questionsRoute);
app.use("/", userRoute);

app.get("/", (req, res) => res.json({ msg: "HOME PAGE" }));

connectMongoDB()
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => console.log("ERROR in connnection of mongoDB", err));

app.listen(PORT, () => console.log(`Server is running on port no ${PORT}`));
