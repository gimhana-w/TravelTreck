
const Destination = require('../models/Destination');

// @desc    Get all destinations
// @route   GET /api/destinations
// @access  Public
const getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find({});
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get a single destination by ID
// @route   GET /api/destinations/:id
// @access  Public
const getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (destination) {
      res.json(destination);
    } else {
      res.status(404).json({ message: 'Destination not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create a new destination
// @route   POST /api/destinations
// @access  Private/Admin
const createDestination = async (req, res) => {
  try {
    const { name, description, location, image } = req.body;
    const newDestination = new Destination({ name, description, location, image });
    const createdDestination = await newDestination.save();
    res.status(201).json(createdDestination);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data' });
  }
};

// @desc    Update a destination
// @route   PUT /api/destinations/:id
// @access  Private/Admin
const updateDestination = async (req, res) => {
  try {
    const { name, description, location, image } = req.body;
    const destination = await Destination.findById(req.params.id);

    if (destination) {
      destination.name = name;
      destination.description = description;
      destination.location = location;
      destination.image = image;

      const updatedDestination = await destination.save();
      res.json(updatedDestination);
    } else {
      res.status(404).json({ message: 'Destination not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Invalid data' });
  }
};

// @desc    Delete a destination
// @route   DELETE /api/destinations/:id
// @access  Private/Admin
const deleteDestination = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);

    if (destination) {
      await destination.remove();
      res.json({ message: 'Destination removed' });
    } else {
      res.status(404).json({ message: 'Destination not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination,
};
