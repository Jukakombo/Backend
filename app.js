import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const app = express();
dotenv.config();
app.use(cors(cors()));
app.use(bodyParser.urlencoded({ extended: true, limit: "5mb" }));
app.use(bodyParser.json({ limit: "5mb", extended:true }));

app.get("/", (req, res) => {
  res.send("Hello its connected");
});

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(
    app.listen(
        (PORT, () => {
      console.log(`Your app is running on port ${PORT}`);
    })
  ))
  .catch((error) => {
    console.log(error);
  });
