const mongoose = require('mongoose')

const taskSchema = mongoose.Schema( {
    title: {
        type : String,
        required : true,
        trim:true
    },
    description: {
        type : String,
        required : true,
        trim:true,
        maxLength:500
    },
    status: {
        type: String,
        default:"undone"
    },
    startDate:{
        type: Date,
        required:true  
    },
    endDate:{
        type: Date,
        required:true  
    }

}, { timestamps: true } )


module.exports = mongoose.model('task', taskSchema )