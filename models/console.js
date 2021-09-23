const mongoose = require('mongoose')
const Schema = mongoose.Schema


const gameConsoleSchema = new Schema({ 
    gameConsole: {
        type: Schema.Types.ObjectId,        
        ref: "Game",
        required: true
        
    }

})


module.exports = mongoose.model("GameConsole", gameConsoleSchema) 
