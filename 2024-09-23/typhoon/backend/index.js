const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");

const catsRoutes = require("./routes/cats.routes");
const exampleRoutes = require("./routes/example.routes");
const todoRoutes = require("./routes/todo.routes");

const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(cors());

app.use("/cats", catsRoutes);
app.use("/examples", exampleRoutes);
app.use("/todo", todoRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/token", (req, res) => {
  const title = req.body.title;
  const priority = req.body.priority;
  const id = Date.now();
  const createdAt = Date.now();
  const updatedAt = null;
  const deleted = false;

  const payload = {
    id,
    title,
    priority,
    createdAt,
    updatedAt,
    deleted,
  };

  const token = jwt.sign(payload, "secret", {
    expiresIn: "1h",
  });

  console.log(`Token: ${token}`);
  res.json({ token });
});

app.post("/verify", (req, res) => {
  const token = req.body.token;
  jwt.verify(token, "secret", (err, decoded) => {
    console.log(`Title: ${decoded.title}. Priority: ${decoded.priority}`);
    res.json({ decoded });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
