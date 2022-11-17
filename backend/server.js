const express = require("express");
const notes = require("../front_end/src/data/blogs");
const dotenv = require("dotenv");
const blogs = require("../front_end/src/data/blogs");
const connectDB = require("./config/db");

const app = express();
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("api is running..");
});

app.get("/api/blogs", (req, res) => {
  res.json(blogs);
});

app.get("/api/blogs/:id", (req, res) => {
  const blog = blogs.find((n) => n._id === req.params.id);
  res.send(blog);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
