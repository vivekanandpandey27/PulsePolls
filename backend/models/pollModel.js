const mongoose = require('mongoose')

const pollSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required : true,
        },
        tags : {
            type : String,
            required : true,
        },
        imageUrl : {
            type : String,
            required : true,
        },
        yes : {
            type : Number,
            default: 0,
        },
        no : {
            type : Number,
            default: 0,
        },
       
        expiresAt : {
            type : Date
        },
        isActive: {
            type: Boolean,
            default: true
        },


    },
    {timestamps : true});


    module.exports = mongoose.model('Poll', pollSchema);