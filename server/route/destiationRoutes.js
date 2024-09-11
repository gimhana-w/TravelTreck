import express from "express"; // Add the import for express
import { getDestinations, addDestination , getById,updateDestination,deleteDestination} from "../controllers/destinationController.js";




const router = express.Router();

router.get("/",getDestinations);
router.post("/",addDestination);
router.get("/:id",getById);
router.put("/:id",updateDestination);
router.delete("/:id",deleteDestination);
export default router;

