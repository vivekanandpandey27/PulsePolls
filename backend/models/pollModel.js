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
        options: [{
            text: {
              type: String,
              required: true
            },
            votes: {
              type: Number,
              default: 0
            },
            voters: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User' 
            }]
        }],
        participants: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User' 
        }],
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