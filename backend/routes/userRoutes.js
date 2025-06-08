const express = require('express');
const {register , login ,logout ,profile } = require('../controllers/userController');
const {isAuthenticated} = require("../middleware/isAuthenticated")
const router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.get("/logout",logout);
router.get("/profile",isAuthenticated,profile);


// router.put("/editprofile",editprofile);


module.exports=router;

