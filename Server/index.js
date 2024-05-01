const express = require("express");
const mongoose = require("mongoose");
const questionsRoute = require("./routes/questions");
const userRoute = require("./routes/users");
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/questions", questionsRoute);
app.use("/", userRoute);


// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/leetcode")
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => console.log("ERROR in connnection of mongoDB", err));

app.listen(PORT, () => console.log(`Server is running on port no ${PORT}`));
