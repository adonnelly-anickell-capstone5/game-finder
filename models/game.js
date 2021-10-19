const mongoose = require('mongoose')
const Schema = mongoose.Schema


const gameSchema = new Schema({ 
    title:{
        type: String,
        required: true
    },
    players:{
        type: String,
        required: true
    },
    category:{
        type: String,
        enum: ['FPS','Cozy','MMORPG']
    },
  
    rating:{
        type: String,
        enum: [1,2,3,4,5],
        required: true
    },
    isFavorite: {
        type: Boolean,
        default: false,
        required: true
    }

})

module.exports = mongoose.model("Game", gameSchema) 


// gameConsole:{
//     //could have more than one console per game----one game to many consoles data relationship
//     type: String,
//     enum: ['PS4','PS5','XBoxONE', 'XBoxX', 'PC','Nintendo Switch'],
    
// },