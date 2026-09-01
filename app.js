import express from "express";

const app = express();

app.use(express.json());

const ageCheck = (req, res, next) => {
  const { age } = req.body;
  if (age < 18) {
    return res.json({ message: "Invalid Age" });
  }
  req.otp = 4567;
  next();
};

const checkUser = (req, res, next) => {
  if (req.otp !== 4547) {
    return res.json({ message: "Invalid User" });
  }
  next();
};

app.post("/", (req, res) => {
  const { email, username, age } = req.body;

  // return res.json({
  //   message: "You are registered successfully",
  //   email,
  //   username,
  // });

  throw new Error("Unable to create user");
});

app.use((err, req, res, nest) => {
  console.error(err.message);
  res.status(500).json({ success: false, message: err.message });
});

app.listen(3000, () => {
  console.log("listening port:3000");
});
