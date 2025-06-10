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
                message : "Password and Confirm Password are not equal !!",
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
};


exports.login = async (req,res) => {
    try{
        //extracting data from req
        const {userName, password} = req.body;
    
    
        //Checking if all fields are available or not
        if(!userName || !password)
        {
            return res.status(400).json({
                success : false,
                message : "Enter All Fields",
            });
        }
    
        const user = await User.findOne({userName});
    
        //Validating userName
        if(!user)
        {
            return res.status(400).json({
                success : false,
                message : "Invalid UserName",
            });
        }
    
        //Checking Password
        const isMatch = await bcrypt.compare(password,user.password);
    
        if (!isMatch) 
        {
          return res.status(400).json({
            success: false,
            message: "Wrong password",
          });
        }
    
        //creating jwt token
        const payload = {userID : user._id};
        const token = jwt.sign(payload,process.env.secret_code,{
            expiresIn : "1d",
        });
    
        //Send Token as cookie
        return res
        .status(200)
        .cookie("token",token,{
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true
        })
        .json({
             userName : user.userName,
             fullName : user.fullName,
             id : user._id,
             profilePhoto : user.profilePhoto,
             gender : user.gender,
        });


    } catch(error) {
        res.status(500).json({
        success: false,
        message: "An error occurred during login.",
        error: error.message,
        });
    }
    };


exports.logout = async (req,res) => {
    try {

        res.status(200).cookie("token","",{
            maxAge : 0,
            httpOnly : true
        }).json({
            message : "LogOut Successfully .",
        });

    } catch {
        res.status(400).json({
            success : false,
            message : "Error While Logout !!",
        })
    }
}  

exports.Editprofile = async (req, res) => {
  try {
    const user_id = req.ID;
    console.log("Received form data:", req.body);
    const {Username} = req.body;
    //console.log(Username);


    const similar_username = await User.findOne({userName : Username});

    console.log(user_id);
    console.log("Simialr data : ",similar_username);   

    //console.log(similar_username._id.toString());
    if(similar_username !== null && user_id !== similar_username?._id.toString())
    {   
            console.log("unMatched");
            return res.status(400).json({
              success: false,
              message: "UserName Already Taken",
            });
    }
    else
    {
        console.log("Can update")

        const user = await User.findOneAndUpdate({_id : user_id} , {
            userName : req.body.Username,
            fullName : req.body.fullName,
            profilePhoto : req.body.imageUrl,
            gender : req.body.gender
        },{new : true});

        console.log(user);

        return res.status(200).json({
          success: true,
          message: "Profile updated successfully",
        });
    }
  } catch (error) {

    return res.status(400).json({
      success: false,
      message: "Error while updating profile data!",
    });
  }
};


