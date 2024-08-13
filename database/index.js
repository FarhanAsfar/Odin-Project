const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://farhan:farhan21@cluster0.0qnn6.mongodb.net/user_app",
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  const existUser = await User.findOne({ email: email });
  if (existUser) {
    return res.status(400).send("User already exist");
  }

  const user = new User({
    name: username,
    email: email,
    password: password,
  });

  await user.save();

  res.json({ message: "User created successfully" });
});

app.listen(3000);
