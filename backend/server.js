const express = require("express");
const notes = require("../front_end/src/data/blogs");
const dotenv = require("dotenv");
const blogs = require("../front_end/src/data/blogs");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddlrware");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("api is running..");
});

app.get("/api/blogs", (req, res) => {
  res.json(blogs);
});

// app.get("/api/blogs/:id", (req, res) => {
//   const blog = blogs.find((n) => n._id === req.params.id);
//   res.send(blog);
// });

app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
