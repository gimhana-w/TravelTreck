import Destination from "../models/Destination.js";

// Get all destinations
export const getDestinations = async (req, res) => {
  let destinations;

  try {
    // Fetch all destinations
    destinations = await Destination.find();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error fetching destinations" });
  }

  // If no destinations are found
  if (!destinations) {
    return res.status(404).json({ message: "Destinations not found" });
  }

  // Display all destinations
  return res.status(200).json({ destinations });
};

//data insert

export const addDestination = async (req,res,next) =>{

  const{name,description,location,popular} = req.body;

  let destination;

  try{
    destination = new Destination({name,description,location,popular});
    await destination.save();

  }catch(err){
      console.log(err);

  }

  if (!destination){
    
    return res.status(404).send({message:"unable to add destination"});
  }
  return res.status(200).json({destination});

};

