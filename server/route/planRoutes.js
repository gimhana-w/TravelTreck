import express from "express"; // Import express
import { createPlan, getUserPlans, updatePlan, deletePlan } from "../controllers/planController.js"; // Import controller functions

const router = express.Router(); // Create a new router

// Define routes for the Plan resource
router.get("/", getUserPlans); // Get all user plans
router.post("/", createPlan); // Create a new plan
router.put("/:id", updatePlan); // Update an existing plan by ID
router.delete("/:id", deletePlan); // Delete a plan by ID

export default router; // Export the router
