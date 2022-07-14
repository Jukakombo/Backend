import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.get("/", (req, res) => {
  res.send("Hello Mr Ally");
});
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(
    app.listen(PORT, () => console.log(`Your app is running on port ${PORT}`))
  )
  .catch((error) => {
    console.log(error);
  });
