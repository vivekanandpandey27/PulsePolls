const express = require('express');
const {register , login ,logout ,Editprofile,getOtherUser } = require('../controllers/userController');
const {isAuthenticated} = require("../middleware/isAuthenticated")
const router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.get("/logout",logout);
router.post("/Editprofile",isAuthenticated,Editprofile);
router.post("/getOtherUser",getOtherUser);



module.exports=router;

