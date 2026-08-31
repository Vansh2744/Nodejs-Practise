import express from "express";

const app = express();

app.use(express.json());

const ageCheck = (req, res, next) => {
  const { age } = req.body;
  if (age < 18) {
    return res.json({ message: "Invalid Age" });
  }
  next();
};

app.post("/", ageCheck, (req, res) => {
  const { email, username, age } = req.body;

  return res.json({
    message: "You are registered successfully",
    email,
    username,
  });
});

app.listen(3000, () => {
  console.log("listening port:3000");
});
