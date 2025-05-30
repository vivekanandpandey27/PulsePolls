const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req,res) => {
    try{
        const { fullName, userName, password, confirmPassword, gender } = req.body;

        //Here we are dooing data vlidation 
        if (!fullName || !userName || !password || !confirmPassword || !gender) 
        {
            return res.status(400).json({
                message : "All Data Fields are required !",
                success : false,
            });
        }

        //checking if password and confirm password equal ?
        if(password !== confirmPassword)
        {
            return res.status(400).json({
                success : false,
                message : "Paaword and Confirm Password are not equal !!",
            })
        }

        //We will check if the userName is already taken or not
        const user = await User.findOne({userName});

        if(user)
        {
            return res.status(400).json({
                success : false,
                message : "UserName already Taken ",
            })
        }

        //Encypting Password 
        const encryptedPassword = await bcrypt.hash(password,10);

        //Generating default profile photo 
        const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${userName}`;


        //Saving in DB
        const newUser = await User.create({
            fullName,
            userName,
            password: encryptedPassword,
            gender,
            profilePhoto : gender == "male" ? maleProfilePhoto : femaleProfilePhoto
        })

        if(!newUser)
        {
            return res.status(400).json({
                success : false,
                message : "Error Saving User Data in DB",
            })
        }

        // Respond with success
        return res.status(200).json({
          success: true,
          message: "User Registered Successfully!",
        });

    } catch(error) {
        
        return res.status(400).json({
             success: false,
             message: "Error While Registering User",
             error: error.message,
            });
    }
} 