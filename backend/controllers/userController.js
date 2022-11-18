const asyncHandler = require("express-async-handler");
const user = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  const userExists = await user.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("user already exits");
  }

  const User = await user.create({
    name,
    email,
    password,
    pic,
  });

  if (User) {
    res.status(201).json({
      _id: User._id,
      name: User.name,
      email: User.email,
      isAdmin: User.isAdmin,

      pic: User.pic,
    });
  } else {
    res.status(400);
    throw new Error("Error Occured..");
  }
});

module.exports = { registerUser };
