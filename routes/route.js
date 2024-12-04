const express = require("express");
const route = express.Router();
const {authMiddleware,isAdmin} = require('../middleware/authMiddleWare')
const {  submitRSVP,getAllRSVPs,searchUsers } = require("../controller/user");


route.post("/rsvp", submitRSVP);
route.get("/rsvps", getAllRSVPs);
route.get("/search", searchUsers);
// POST route for plus one RSVP
module.exports = route;