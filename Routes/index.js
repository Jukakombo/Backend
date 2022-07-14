import express from "express";

import {
  creatPost,
  deletePost,
  getPost,
  updatePost,
} from "./../controler/index.js";
const postRoutes = express.Router();
postRoutes.get("/", getPost);
postRoutes.post("/", creatPost);
postRoutes.patch("/:id", updatePost);
postRoutes.delete("/:id", deletePost);
export default postRoutes;
