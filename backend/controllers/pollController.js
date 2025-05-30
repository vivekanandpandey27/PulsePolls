const pollModel = require('../models/pollModel');


//1----CreatePoll
const createPoll = async (req,res)=>{
    try{
        const{title, tags, imageUrl , expiresAt} = req.body;

        const poll = new pollModel(
            {title,
            tags,
            imageUrl,
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
        const id = req.params.id;
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

//4---------Tick Karna YES or NO
// findbyId then save bhi kr skte the  but 2 way proccess hota isiliye findByIdAnsUpdate use krenge 

const votePolls = async(req,res)=>{
    try{
        const id = req.params.id;
        const option = req.body.option;

        const poll = await pollModel.findByIdAndUpdate(id , {$inc : option ==='yes'?{yes : 1}:{no : 1}} ,{ new : true} );
       
        res.status(200).json({success : true,message : "Voted successfully",poll});
    }
    catch(error){
        res.status(500).json({success : false,error : "'Failed to vote'"});
    }

};

module.exports ={createPoll,deletePoll,showAllPolls,votePolls};