const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  socketid: {
    type: String,
    // required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", schema);
module.exports = User;
