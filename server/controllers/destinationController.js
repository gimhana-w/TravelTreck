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

// Find destination by ID
export const getById = async (req, res, next) => {
  const id = req.params.id;

  let destinations;

  try {
    destinations = await Destination.findById(id);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error finding destination" });
  }

  if (!destinations) {
    return res.status(404).send({ message: "Unable to find destination" });
  }

  return res.status(200).json({ destinations });
};

//update destination
export const updateDestination = async (req, res, next) =>{

  const id = req.params.id;

  const{name,description,location,popular} = req.body;

  let destinations;
  
  try{
    destinations= await Destination.findByIdAndUpdate(id,
      {name:name,description:description,location:location,popular:popular});
      destinations = await destinations.save();

  }catch(err){

    console.log(err);

  }
  if (!destinations) {
    return res.status(404).send({ message: "Unable to Update" });
  }

  return res.status(200).json({ destinations });

};

//delete dastination
export const deleteDestination = async(req,res, next) => {
  const id = req.params.id;
  
  let dastinations;

  try{

    dastinations = await Destination.findByIdAndDelete(id);
  }catch (err){
    console.log(err)
  }
  if (!dastinations) {
    return res.status(404).send({ message: "Unable to delete" });
  }

  return res.status(200).json({ dastinations });


}
