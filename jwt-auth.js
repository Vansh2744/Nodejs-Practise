import jwt from "jsonwebtoken";
import express from "express";
import session from "express-session";

const app = express();

let users = [];

app.use(express.json());
app.use(
  session({
    secret: "secret-token",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000,
    },
  }),
);

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const token = jwt.sign({ email }, "suhufhueu834eruyrr884", {
    expiresIn: "30d",
  });

  req.session.token = token;

  res.json({ token });
});

app.get("/user", (req, res) => {
  const token = req.session.token;

  const data = jwt.verify(token, "suhufhueu834eruyrr884");

  res.json(data);
});

app.listen(3000, () => {
  console.log("listening to port:3000");
});
