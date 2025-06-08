const express = require('express');
const router = express.Router();
const {createPoll,deletePoll,showAllPolls,votePolls} = require('../controllers/pollController');
const { isAuthenticated } = require('../middleware/isAuthenticated');


router.post("/post",isAuthenticated,createPoll);
router.get("/allpost",showAllPolls);
router.delete("/delete/:id",isAuthenticated,deletePoll);
router.post("/vote",isAuthenticated,votePolls);

module.exports = router;

//router.get("/getpost/:id")