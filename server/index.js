import express from "express";
import mongoose from "mongoose";

const app = express();

// Middleware
app.use("/", (req, res, next) => {
  res.send("It is working");
});

mongoose
  .connect("mongodb+srv://admin:WNM6le3U5gTaDz5d@users.xzqkmsk.mongodb.net/")
  .then(() => {
    console.log("Database connected");
    app.listen(5000, () => {
      
    });
  })
  .catch((err) => console.log(err));
