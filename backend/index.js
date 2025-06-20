const express = require('express');
const dotenv = require('dotenv');
const { connect } = require('mongoose');
const cors = require('cors');
var cookieParser = require('cookie-parser')
const dbConnect = require('./config/database')
const pollRoutes = require("./routes/pollRoutes")
const userRoutes = require("./routes/userRoutes")

dotenv.config();


const app = express();


const PORT = process.env.PORT || 5000;


const corsOption = {
   origin: ["https://pulse-polls-ue2p.vercel.app/","http://localhost:3000", "http://192.168.46.48:3000","*","http://localhost:5174","http://localhost:5173","http://192.168.31.72:5173" ,"http://192.168.31.144:5173","http://192.168.56.1:5173"],
   credentials:true
};



//middleware to parse upcoming request
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); 
app.use(cors(corsOption));

//routes or mounting url
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/polls",pollRoutes);

const server = app.listen(PORT, () => {
  console.log(`Server running... ${PORT} `);
});


dbConnect();



