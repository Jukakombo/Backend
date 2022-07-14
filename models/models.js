import mongoose from "mongoose";

const postMessagesSchema = new mongoose.Schema(
  {
    name: String,
    message: String,
    hastag: String,
    title: String,
    image: String,
    like: Number,
  },
  { new: true }
);

const Posts = mongoose.model("Posts", postMessagesSchema);
export default Posts;
