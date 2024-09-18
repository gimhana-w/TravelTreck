import express from "express";
import mongoose from "mongoose";
import destinationRoutes from "./route/destiationRoutes.js";
import planRoutes from "./route/planRoutes.js";


const app = express();

// Middleware
app.use(express.json());
app.use("/destination",destinationRoutes);
app.use("/plane",planRoutes);





//database conection
mongoose
  .connect("mongodb+srv://admin:WNM6le3U5gTaDz5d@users.xzqkmsk.mongodb.net/")
  .then(() => {
    console.log("Database connected");
    app.listen(5000, () => {
      
    });
  })
  .catch((err) => console.log(err));
