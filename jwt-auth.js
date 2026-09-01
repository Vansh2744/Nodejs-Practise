import jwt from "jsonwebtoken";
import express from "express";
import session from "express-session";
import cors from "cors";
import multer from "multer";
import path from "path";

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
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
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

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("myfile"), (req, res) => {
  res.json({
    name: req.file.filename,
  });
});

app.listen(3000, () => {
  console.log("listening to port:3000");
});
