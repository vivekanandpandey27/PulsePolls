const express = require('express');
const {register , login ,logout ,editprofile } = require('../controllers/userController');

const router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.get("/logout",logout);

// router.get("/profile",profile);
// router.put("/editprofile",editprofile);


module.exports=router;

