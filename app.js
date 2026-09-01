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

// app.get("/", (req, res, next) => {
//   // const { email, username, age } = req.body;

//   // return res.json({
//   //   message: "You are registered successfully",
//   //   email,
//   //   username,
//   // });

//   // throw new Error("Unable to create user");

//   const user = null;

//   if (!user) {
//     next(new Error("Unable to find user"));
//   }

//   res.json(user);
// });

app.get("/", async (req, res, next) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, nest) => {
  // console.error(err.message);
  res.status(500).json({ success: false, message: err.message });
});

app.listen(3000, () => {
  console.log("listening port:3000");
});
