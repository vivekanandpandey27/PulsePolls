const pollModel = require('../models/pollModel');
const User  = require('../models/userModel')

//1----CreatePoll
const createPoll = async (req,res)=>{
    try{
        const id = req.ID;
        //console.log(id);
        const{title, tags, imageUrl ,options, expiresAt} = req.body;

        const poll = new pollModel(
            {title,
            tags,
            imageUrl,
            options,
            participants : [],
            creator : id,
            expiresAt}
        );

        await poll.save();
        res.status(201).json({success : true, message : "Created Successfully" ,poll});
    }
    catch(error){
        console.log(error);
        res.status(500).json({success : false,error : "Failed To Create Poll "});

    }

};


//2-----Deletepoll
const deletePoll = async (req,res)=>{
    try{
        const id = req.body.id;
        const poll = await pollModel.findByIdAndDelete(id);
        
        res.json({success : true,message : "Deleted Successfully"});
    }
    catch(error){
        console.log(error);
        res.status(500).json({success : false,error : "Failed To Delete"});
    }

};

//3------showAllPolls

const showAllPolls = async(req,res)=>{
    try{
       const polls = await pollModel.find().sort({createdAt:-1});
       res.status(200).json(polls);
    }
    catch(error){
        res.status(500).json({success : false,error : 'Failed to fetch polls' });

    }

};

//4---------Tick Karna Options ko 
// findbyId then save bhi kr skte the  but 2 way proccess hota isiliye findByIdAnsUpdate use krenge 

const votePolls = async(req,res)=>{
    try{
        
        const id = req.ID;
        const VoteData = req.body;
        const poll_id = VoteData.Poll_ID;
        const option_id = VoteData.Vote_ID;

        // Fetaching the Poll On Which User Voted 
        const Poll= await pollModel.findById(poll_id);
        //console.log(Poll);
        const available = await Poll.participants.includes(id);
        console.log(available);

        if(!available)
        {
            console.log("AAA");
            const updatedPoll = await pollModel.findByIdAndUpdate(
              poll_id,
              {
                  $addToSet: { participants: id }, // Add user to participants
                  $inc: { "options.$[option].votes": 1 }, // Increment vote count
                  $push: { "options.$[option].voters": id }, // Add user to voters
              },
              {
                  new: true,
                  arrayFilters: [{ "option._id": option_id }], // Match the correct option
              }
            );

            console.log("FIRST TIME",updatedPoll);
        }
        else
        {
            // 1. Find the poll
            const poll = await pollModel.findById(poll_id);
            
            // 2. Find the option where the user has already voted
            const oldOption = poll.options.find(opt => opt.voters.includes(id));
            
            // 3. Remove vote from the old option
            await pollModel.findByIdAndUpdate(
                poll_id,
                {
                    $inc: { "options.$[oldOpt].votes": -1 },
                    $pull: { "options.$[oldOpt].voters": id }
                },
                {
                    arrayFilters: [{ "oldOpt._id": oldOption._id }]
                }
            );
            
            // 4. Add vote to the new option
            const updatedPoll = await pollModel.findByIdAndUpdate(
                poll_id,
                {
                    $inc: { "options.$[newOpt].votes": 1 },
                    $push: { "options.$[newOpt].voters": id }
                },
                {
                    new: true,
                    arrayFilters: [{ "newOpt._id": option_id }]
                }
            );
            
            console.log(updatedPoll);
            
        }
       
        res.status(200).json({success : true,error : "Voted Successfullly !"});
    }
    catch(error){
        res.status(500).json({success : false,error : "'Failed to vote'"});
    }

};

module.exports ={createPoll,deletePoll,showAllPolls,votePolls};