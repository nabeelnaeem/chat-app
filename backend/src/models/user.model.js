import mongoose from "mongoose";

//?User Schema
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

//?User Model
//Mongoose want to make first letter of model capital and singular
// User (correct) - users,user etc (incorrect)
const User = mongoose.model("User", userSchema);
export default User;
