import { Dropdown } from "bootstrap"
import React from "react"

export default function Filters(props) {
    const games = props.games
    const dropValue = props.dropValue
    
    const players = games.filter(games => {
        if (dropValue === "4+" && games.players >= 4) {
            return true
        } 
        return games.players === (dropValue)
    }).map(games => {  
        return (
                <div className="game-box" key={games._id} >
                    <h2>{games.title}</h2>
                    <h2>Players: {games.players}</h2> 
                    <h2>Category: {games.category}</h2>
                    <h2>Console: {games.gameConsole}</h2>    
                    <h2>Rating: {games.rating}</h2>          
                </div>
        )}
    )

    const category = games.filter(games => {
        return games.category === dropValue
    }).map(games => {  
        return (
                <div className="game-box" key={games._id} >
                    <h2>{games.title}</h2>
                    <h2>Players: {games.players}</h2> 
                    <h2>Category: {games.category}</h2>
                    <h2>Console: {games.gameConsole}</h2>    
                    <h2>Rating: {games.rating}</h2>          
                </div>
        )}
    )

    const console = games.filter(games => {
        return games.gameConsole === dropValue
    }).map(games => {  
        return (
                <div className="game-box" key={games._id} >
                    <h2>{games.title}</h2>
                    <h2>Players: {games.players}</h2> 
                    <h2>Category: {games.category}</h2>
                    <h2>Console: {games.gameConsole}</h2>    
                    <h2>Rating: {games.rating}</h2>          
                </div>
        )}
    )

    const lowHighRatings = games.sort((a, b) => {
        return a.rating - b.rating
    }).map(games => {  
        return (
                <div className="game-box" key={games._id} >
                    <h2>{games.title}</h2>
                    <h2>Players: {games.players}</h2> 
                    <h2>Category: {games.category}</h2>
                    <h2>Console: {games.gameConsole}</h2>    
                    <h2>Rating: {games.rating}</h2>          
                </div>
        )}
    )

    const highLowRatings = games.sort((a, b) => {
        return b.rating - a.rating
    }).map(games => {  
        return (
                <div className="game-box" key={games._id} >
                    <h2>{games.title}</h2>
                    <h2>Players: {games.players}</h2> 
                    <h2>Category: {games.category}</h2>
                    <h2>Console: {games.gameConsole}</h2>    
                    <h2>Rating: {games.rating}</h2>          
                </div>
        )}
    )

    // if (dropValue === "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9") {
    //     return (
    //        players
    //     )} 
        
    // if (dropValue === "Cozy" || "MMORPG" || "FPS") {
    //     return (
    //         category
    //     )} 
            
    // if(dropValue === 'PS4' || 'PS5' || 'XBoxONE' ||  'XBoxX' ||  'PC' || 'Nintendo Switch') {
    //     return (
    //         console
    //     )} 
        
  

    return (
        
        <div>
           
        </div>
    )
}