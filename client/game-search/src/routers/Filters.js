import { Dropdown } from "bootstrap"
import React from "react"

export default function Filters(props) {
    const games = props.games
    const dropValue = props.dropValue
    let display = {}

    let players = games.filter(games => {
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
                    <h2>Console: {games.gameConsole.join(', ')}</h2>    
                    <h2>Rating: {games.rating}</h2>          
                </div>
        )}
    )

    let category = games.filter(games => {
        return games.category === dropValue
    }).map(games => {  
        return (
                <div className="game-box" key={games._id} >
                    <h2>{games.title}</h2>
                    <h2>Players: {games.players}</h2> 
                    <h2>Category: {games.category}</h2>
                    <h2>Console: {games.gameConsole.join(', ')}</h2>    
                    <h2>Rating: {games.rating}</h2>          
                </div>
        )}
    )

    let console = games.filter(games => {
        return games.gameConsole === dropValue
    }).map(games => {  
        return (
                <div className="game-box" key={games._id} >
                    <h2>{games.title}</h2>
                    <h2>Players: {games.players}</h2> 
                    <h2>Category: {games.category}</h2>
                    <h2>Console: {games.gameConsole.join(', ')}</h2>    
                    <h2>Rating: {games.rating}</h2>          
                </div>
        )}
    )

    let lowHighRatings = games.sort((a, b) => {
        return a.rating - b.rating
    }).map(games => {  
        return (
                <div className="game-box" key={games._id} >
                    <h2>{games.title}</h2>
                    <h2>Players: {games.players}</h2> 
                    <h2>Category: {games.category}</h2>
                    <h2>Console: {games.gameConsole.join(', ')}</h2>    
                    <h2>Rating: {games.rating}</h2>          
                </div>
        )}
    )

  let highLowRatings = games.sort((a, b) => {
        return b.rating - a.rating
    }).map(games => {  
        return (
                <div className="game-box" key={games._id} >
                    <h2>{games.title}</h2>
                    <h2>Players: {games.players}</h2> 
                    <h2>Category: {games.category}</h2>
                    <h2>Console: {games.gameConsole.join(', ')}</h2>    
                    <h2>Rating: {games.rating}</h2>          
                </div>
        )}
    )
 
    switch(dropValue) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5": 
        case "6": 
        case "7":
        case "8":
        case "9":
            display = players
            break;
        case "Cozy":
        case "MMORPG":
        case "FPS":
            display = category
            break;
        case "high to low":
            display = highLowRatings
            break;
        case "low to high":
            display = lowHighRatings
            break;
        case "PS4":
        case "PS5":
        case "XBoxONE":
        case "XBoxX":
        case "PC":
        case "Nintendo Switch":
            display = console
        break;
        default:
        display = players
    }
     
    return (  
        <div>
           {display}
        </div>
    )
}