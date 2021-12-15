const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be present"],
  },
  email: {
    type: String,
    required: [true, "email must be present"],
    unique: [true, "Email already exits"],
  },
  password: {
    type: String,
    required: true,
  },
  profilepic: {
    type: String,
  },
});

const UserModel = mongoose.model("User", userSchema);
module.exports = { UserModel };
