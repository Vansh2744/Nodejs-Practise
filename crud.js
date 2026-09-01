import express from "express";

const app = express();

app.use(express.json());

let users = [];

app.post("/create", (req, res) => {
  const { name, email, age } = req.body;

  users.push({ id: users.length + 1, email, name, age });

  res.json({ message: "User Registered" });
});

app.get("/users", (_, res) => {
  res.json({ data: users });
});

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((user) => user.id == id);

  res.json(user);
});

app.put("/user-update/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = users.findIndex((u) => u.id === id);

  users[index] = { ...users[index], ...req.body };

  res.json({
    message: "User updated successfully",
    user: users[index],
  });
});

app.delete("/user-delete/:id", (req, res) => {
  const id = req.params.id;

  users = users.filter((user) => user.id != id);

  res.json({ data: users });
});

app.listen(3000, () => {
  console.log("listening on port:3000");
});
