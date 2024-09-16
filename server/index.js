import express from "express";
import mongoose from "mongoose";
import destinationRoutes from "./route/destiationRoutes.js";
//import planRoutes from "./route/planRoutes.js";
import userRoutes from "./route/userRoute.js";
import paymentRoutes from "./route/paymantRoutes.js";
import vehicleRoutes from "./route/vehicleRoutes.js";
import packageRoutes from "./route/packageRoutes.js";
import advertisementRoutes from "./route/advertisementRoutes.js";
import reviewRoutes from "./route/reviewRoutes.js";
import adventureRoutes from "./route/adventureRoutes.js";

const app = express();

// Middleware
app.use(express.json());
app.use("/destination", destinationRoutes);

//app.use("/plane",planRoutes);
app.use("/api/users", userRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/advertisements", advertisementRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/adventures", adventureRoutes);
//database conection
mongoose
  .connect("mongodb+srv://admin:WNM6le3U5gTaDz5d@users.xzqkmsk.mongodb.net/")
  .then(() => {
    console.log("Database connected");
    app.listen(8080, () => {});
  })
  .catch((err) => console.log(err));
