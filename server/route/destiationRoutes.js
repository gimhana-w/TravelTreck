import express from "express"; // Add the import for express
import { getDestinations, addDestination } from "../controllers/destinationController.js";




const router = express.Router();

router.get("/",getDestinations);
router.post("/",addDestination);
export default router;

