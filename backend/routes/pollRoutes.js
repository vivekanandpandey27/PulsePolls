const express = require('express');
const router = express.Router();
const {createPoll,deletePoll,showAllPolls,votePolls} = require('../controllers/pollController');
const { isAuthenticated } = require('../middleware/isAuthenticated');


router.post("/post",isAuthenticated,createPoll);
router.get("/allpost",isAuthenticated,showAllPolls);
router.delete("/delete/:id",isAuthenticated,deletePoll);
router.put("/vote/:id",isAuthenticated,votePolls);



//router.get("/getpost/:id")