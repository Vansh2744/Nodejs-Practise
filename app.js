import express from "express";

const app = express();

app.use(express.json());


app.post("/", (req, res) => {
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
