import express from "express";
import { PORT, mongoURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Welcome to MERN stack');
});

// Route


mongoose
    .connect(mongoURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {  // Pass the error object to the .catch block
        console.error('Error connecting to database:', error);
    });

    const planRoutes = require('./routes/planRoutes');
    // other imports...
    
    app.use('/api/plans', planRoutes);
    // other middleware...   