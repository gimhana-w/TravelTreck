import Plan from "../models/Plan.js";

// Create a new plan
export const createPlan = async (req, res) => {
  const { user, destinations, hotels, vehicles, activities, startDate, endDate, totalCost } = req.body;

  let plan;

  try {
    // Create a new plan
    plan = new Plan({
      user,
      destinations,
      hotels,
      vehicles,
      activities,
      startDate,
      endDate,
      totalCost,
    });

    await plan.save();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error creating plan" });
  }

  if (!plan) {
    return res.status(404).json({ message: "Unable to create plan" });
  }

  return res.status(201).json({ plan });
};

// Get all plans for a user
export const getUserPlans = async (req, res) => {
  let plans;

  try {
    // Fetch all plans for a specific user
    plans = await Plan.find({ user: req.user._id }).populate('destinations hotels vehicles activities');
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error fetching plans" });
  }

  if (!plans) {
    return res.status(404).json({ message: "Plans not found" });
  }

  return res.status(200).json({ plans });
};

// Get plan by ID
export const getPlanById = async (req, res) => {
  const id = req.params.id;
  let plan;

  try {
    plan = await Plan.findById(id).populate('destinations hotels vehicles activities');
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error finding plan" });
  }

  if (!plan) {
    return res.status(404).json({ message: "Plan not found" });
  }

  return res.status(200).json({ plan });
};

// Update a plan
export const updatePlan = async (req, res) => {
  const id = req.params.id;
  const { user, destinations, hotels, vehicles, activities, startDate, endDate, totalCost } = req.body;

  let plan;

  try {
    // Update the plan
    plan = await Plan.findByIdAndUpdate(
      id,
      { user, destinations, hotels, vehicles, activities, startDate, endDate, totalCost },
      { new: true }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error updating plan" });
  }

  if (!plan) {
    return res.status(404).json({ message: "Unable to update plan" });
  }

  return res.status(200).json({ plan });
};

// Delete a plan
export const deletePlan = async (req, res) => {
  const id = req.params.id;

  let plan;

  try {
    // Delete the plan
    plan = await Plan.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error deleting plan" });
  }

  if (!plan) {
    return res.status(404).json({ message: "Plan not found" });
  }

  return res.status(200).json({ message: "Plan deleted successfully" });
};
