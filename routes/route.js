const express = require("express");
const route = express.Router();
const {authMiddleware,isAdmin} = require('../middleware/authMiddleWare')
const { submitPlusOne, submitRSVP } = require("../controller/user");


route.post("/rsvp", submitRSVP);

// POST route for plus one RSVP
route.post("/rsvp/plus-one", submitPlusOne);
module.exports = route;