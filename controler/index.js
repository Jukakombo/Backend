import mongoose from "mongoose";
import Posts from "../models/models.js";

export const getPost = async (req, res) => {
  try {
    const posts = await Posts.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const creatPost = async (req, res) => {
  const { title, message, hastag, image, like } = req.body;
  const newPost = new Posts({ title, message, hastag, image, like });
  try {
    await newPost.save(newPost);
    // const newPost = new Posts({ title, message, hastag, image, like });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.body;
  const { title, message, hastag, image } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post found with such id: ${id}`);
  const updatedPost = { title, message, hastag, image, _id: id };
  await Posts.findByIdAndUpdate(id, updatedPost, { new: true });
  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post found with such id:${id}`);
  await Posts.findByIdAndRemove(id);
  res.json({ message: "Post sucessfully deleted." });
};
