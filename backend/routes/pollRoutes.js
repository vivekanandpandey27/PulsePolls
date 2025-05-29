const express = require('express');
const router = express.Router();
const {PostPoll,allPost} = require('../controllers/PostController');
const { isAuthenticated } = require('../middleware/isAuthenticated');


router.post("/post",isAuthenticated,PostPoll);
router.get("/allpost",isAuthenticated,allPost);

//router.get("/getpost/:id")