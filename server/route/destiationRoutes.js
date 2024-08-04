const express = require('express');

const {
    getDestinations,
    getDestinationById,
    createDestination,
    updateDestination,
    deleteDestination,
  } = require('../controllers/destinationController');

  const{ protect, admin } = require('../middlerwares/')