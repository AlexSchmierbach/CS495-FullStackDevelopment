const express = require('express'); // Express app
const router = express.Router();    // Router Logic
const jwt = require('express-jwt')
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
})

// This is where we import the controllers we will route
const authController = require('../controllers/authentication')
const tripsController = require('../controllers/trips');

// Define route for login/register endpoint
router
    .route("/login")
    .post(authController.login);

router
    .route("/register")
    .post(authController.register);

// Define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList) // GET Method routes tripList
    .post(auth, tripsController.tripsAddTrip); // POST Method Adds a trip

// GET Method routes tripsFindByCode - requires parameter
// POST Method routes tripsUpdateTrip - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(auth, tripsController.tripsUpdateTrip);

module.exports = router;