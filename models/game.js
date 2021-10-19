const mongoose = require('mongoose')
const Schema = mongoose.Schema


const gameSchema = new Schema({ 
    title:{
        type: String,
        required: true
    },
    players:{
        type: String,
    },
    category:{
        type: String,
        enum: ['FPS','Cozy','MMORPG']
    },
    gameConsole:{
        type: Array
    },
    rating:{
        type: String
    }

})

module.exports = mongoose.model("Game", gameSchema) 


