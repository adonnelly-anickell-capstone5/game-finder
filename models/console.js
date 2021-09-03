const mongoose = require('mongoose')
const Schema = mongoose.Schema


const consoleSchema = new Schema({ 
    console: {
        type: Schema.Types.ObjectId,        
        ref: "Game",
        required: true
        
    }

})


module.exports = mongoose.model("Console", consoleSchema) 
